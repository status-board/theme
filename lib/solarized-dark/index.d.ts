declare const _default: {
    name: string;
    typography: {
        default: {
            default: {
                fontFamily: string;
                fontSize: string;
                fontWeight: number;
                lineHeight: string;
            };
            strong: {
                fontWeight: number;
            };
            small: {
                fontSize: string;
            };
        };
        display: {
            default: {
                fontFamily: string;
                fontSize: string;
                lineHeight: string;
            };
        };
        mono: {
            default: {
                fontFamily: string;
                fontSize: string;
                lineHeight: string;
            };
        };
    };
    colors: {
        text: string;
        textHighlight: string;
        background: string;
        icon: string;
        unknown: string;
        success: string;
        warning: string;
        failure: string;
    };
    root: {
        fontFamily: string;
        background: string;
        fontSize: string;
        lineHeight: string;
        extend: string;
    };
    dashboard: {
        header: {
            background: string;
            title: {
                fontSize: string;
                color: string;
            };
        };
        player: {
            slash: {
                color: string;
                margin: string;
            };
        };
    };
    widget: {
        background: string;
        wrapper: {
            padding: string;
        };
        header: {
            height: string;
            subject: {};
            count: {
                color: string;
            };
            icon: {
                fontSize: string;
                color: string;
            };
        };
    };
    notifications: {
        item: {
            padding: string;
            background: string;
            color: string;
            extend: string;
        };
    };
    label: {
        background: string;
        extend: string;
        main: {
            color: string;
        };
        addon: {
            background: string;
            color: string;
        };
    };
    list: {
        item: {
            hover: {
                background: string;
            };
            meta: {
                fontSize: string;
            };
        };
    };
    charts: {
        axis: {
            textColor: string;
            tickColor: string;
            legendColor: string;
        };
        grid: {
            stroke: string;
        };
        colors: string[];
        tooltip: {
            background: string;
            color: string;
            fontSize: string;
            borderRadius: number;
            boxShadow: string;
        };
    };
};
export default _default;
