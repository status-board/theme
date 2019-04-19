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
                fontWeight: number;
                lineHeight: string;
            };
        };
    };
    colors: {
        text: string;
        textHighlight: string;
        icon: string;
        unknown: string;
        success: string;
        warning: string;
        failure: string;
    };
    root: {
        background: string;
        extend: string;
    };
    dashboard: {
        header: {
            title: {};
        };
    };
    widget: {
        wrapper: {
            padding: string;
        };
        header: {
            padding: string;
            extend: string;
            subject: {};
            count: {
                extend: string;
            };
            icon: {
                extend: string;
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
        extend: string;
        main: {
            padding: string;
        };
        addon: {
            padding: string;
            extend: string;
        };
    };
    list: {
        item: {
            padding: string;
            extend: string;
            meta: {
                fontSize: string;
                extend: string;
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
            border: string;
        };
    };
};
export default _default;
