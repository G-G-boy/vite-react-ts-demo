declare interface Window {
    // eslint-disable-next-line camelcase
    vite_plugin_ant_themeVar: {
        fileName: string;
        key: string;
        modifyVars?: {'@primary-color': string};
    }[];
}
