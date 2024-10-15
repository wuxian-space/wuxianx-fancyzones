import { computed, defineComponent, PropType } from 'vue';

import { Splitpanes, Pane, type SplitpaneProps, type RequestUpdateType } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';

import { UserZoneData, ZoneData } from './types';
import './styles.scss';

const props = {
  modelValue: Object as PropType<UserZoneData>,
  zoneMinSize: {
    type: Number,
    default: 10
  },

  spaceSize: {
    type: Number,
    default: 0
  },
  spaceLineSize: {
    type: Number,
    default: 1
  },
  spaceLineHoverSize: {
    type: Number,
    default: 3
  },
  spaceLineColor: {
    type: String,
    default: 'rgba(0,0,0,.07)'
  },
  spaceLineHoverColor: {
    type: String,
    default: 'rgba(0,0,0,.2)'
  },
  backgroundColor: {
    type: String,
    default: '#f2f2f2'
  }
} as const;

export default defineComponent({
  name: 'WuxianFancyzones',
  components: { Splitpanes, Pane },
  emits: {
    change(value: UserZoneData) {
      return value;
    }
  },
  props,

  setup(props, { slots }) {
    const { modelValue } = props;

    const zonesData = computed(() => {
      return deep(modelValue);
      function deep(zone: UserZoneData) {
        const { children, ...rest } = zone;

        const result: ZoneData = {
          ...rest,
          hasChildren: false
        };

        if (Array.isArray(children) && children.length) {
          result.children = children.map((child) => deep(child));
          result.hasChildren = true;
        }

        return result;
      }
    });

    const renderSplitPanes = (zone: ZoneData = zonesData.value, level: number = 0) => {
      const classes = {};

      const styles = {};

      setCssVar('background-color', zone.backgroundColor, props.backgroundColor);
      setCssVar('space-size', zone.space?.size, props.spaceSize);
      setCssVar('space-line-color', props.spaceLineColor);
      setCssVar('space-line-hover-color', props.spaceLineHoverColor);
      setCssVar('space-line-size', props.spaceLineSize);
      setCssVar('space-line-hover-size', props.spaceLineHoverSize);

      function setCssVar(key: string, value: any, defaultValue?: any) {
        const k = `--${key}`;
        if (value !== undefined && value !== null) {
          styles[k] = formatValue(value);
        } else {
          if (level === 0) {
            styles[k] = formatValue(defaultValue);
          }
        }

        function formatValue(val: any) {
          if (['space-size', 'space-line-size', 'space-line-hover-size'].includes(key)) {
            return `${val}px`;
          }

          return val;
        }
      }

      const attrs: Partial<SplitpaneProps> = {
        horizontal: zone.horizontal,
        pushOtherPanes: false,
        dblClickSplitter: false
      };

      function onResize(updated: RequestUpdateType[]) {
        updated.forEach((item, index) => {
          const { size } = item;
          zone.children[index].size = size;
        });
      }

      function renderChildren() {
        return zone.children?.map((child) => {
          return (
            <pane size={child.size} min-size={child.minSize || props.zoneMinSize}>
              {!child.hasChildren ? slots?.default?.({ zone: child }) : renderSplitPanes(child, level + 1)}
            </pane>
          );
        });
      }

      return (
        <splitpanes class={classes} style={styles} onResize={onResize} {...attrs}>
          {renderChildren()}
        </splitpanes>
      );
    };

    return {
      zonesData,
      renderSplitPanes
    };
  },

  render() {
    return <div class='wuxian-fancyzones'>{this.renderSplitPanes()}</div>;
  }
});
