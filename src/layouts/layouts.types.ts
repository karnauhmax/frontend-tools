export enum AppLayoutsEnum {
 default = "default",
 helper = "helper",
 error = "error",
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
 default: "AppLayoutDefault.vue",
 helper: "HelperLayout.vue",
 error: "AppLayoutError.vue",
};
