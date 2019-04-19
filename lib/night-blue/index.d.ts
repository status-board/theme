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
        color: string;
        background: string;
        extend: string;
    };
    dashboard: {
        header: {
            background: string;
            color: string;
            boxShadow: string;
            title: {};
        };
    };
    widget: {
        background: string;
        extend: string;
        wrapper: {
            padding: string;
        };
        header: {
            height: string;
            background: string;
            color: string;
            extend: string;
            subject: {};
            count: {
                color: string;
                extend: string;
            };
            icon: {
                fontSize: string;
                color: string;
            };
        };
        body: {
            top: string;
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
        extend: string;
        main: {
            background: string;
            color: string;
        };
        addon: {
            background: string;
            color: string;
        };
    };
    list: {
        item: {
            extend: string;
            hover: {
                background: string;
            };
            meta: {
                color: string;
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
            borderRadius: string;
            boxShadow: string;
        };
    };
};
export default _default;
