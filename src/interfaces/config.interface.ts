import {
    _ExtractActionsFromSetupStore,
    _ExtractGettersFromSetupStore,
    _ExtractStateFromSetupStore,
    StoreDefinition
} from "pinia";

export interface alertProps {
    type: 'success' | 'error' | 'info' | 'warning',
    message: string,
    title?: string,
    show: boolean,
    timeout?: number
}

export interface piniaStoreProps {
    store: StoreDefinition<string, _ExtractStateFromSetupStore<void>, _ExtractGettersFromSetupStore<void>, _ExtractActionsFromSetupStore<void>>
}

export interface HttpClientProps {
    url: string,
    data?: object,
    method?: string,
    headers?: {
        [key: string]: string
    },
    sendToken?: boolean
}
