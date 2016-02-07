declare namespace Bootstrap {
    class Helper {
        static decorateBootstrapElements(): void;
        static decorateValidationElements(): void;
        static decorateValidationFieldValidate(): void;
        static decorateValidationIcons(): void;
        static decorateCollapsiblePanels(): void;
        static decorateModals(): void;
        private static getOptions(element);
        private static getFieldName(element);
        private static _UniqueId;
        private static applyUniqueId(element);
    }
}
declare namespace VRS.WebAdmin {
    class Menu {
        private _MenuEntries;
        private _MenuItemsList;
        constructor();
        private fetchMenuEntries();
        private addTopNavbar();
        private addNavSidebar();
        private populateMenu();
    }
    var menu: Menu;
}
declare namespace VRS.WebAdmin {
    class ViewId {
        private _LostContact;
        private _FailedAttempts;
        private _ModalOverlay;
        private _ShowModalOverlayTimer;
        private _Id;
        Id: string;
        private _ViewName;
        ViewName: string;
        constructor(viewName: string, viewId?: string);
        private setHeartbeatTimer(pauseInterval?);
        private sendHeartbeat();
        showModalOverlay(show: boolean): void;
        isModalOverlayVisible(): boolean;
        ajax(methodName: string, settings?: JQueryAjaxSettings, showModalOverlay?: boolean, keepOverlayWhenFinished?: boolean): JQueryXHR;
        private buildMethodUrl(methodName);
        private addViewIdToSettings(settings);
        private isDeferredExecutionResponse(response);
        private fetchDeferredExecutionResponse(jobId, success, interval, removeOverlay);
        private sendRequestForDeferredExecutionResponse(jobId, success, removeOverlay);
        createWrapupValidation(validationFields: VirtualRadar.Interface.View.IValidationModelField_KO[]): IValidation_KC;
        createArrayWrapupValidation<T>(array: KnockoutObservableArray<T>, getWrapUp: (item: T) => IValidation_KC): IValidation_KC;
        findValidationProperties(model: Object, appendToArray?: VirtualRadar.Interface.View.IValidationModelField_KO[]): VirtualRadar.Interface.View.IValidationModelField_KO[];
        describeEnum(enumValue: number, enumModels: VirtualRadar.Interface.View.IEnumModel[]): string;
    }
}
