export enum ApiStatus {
    PENDING = "pending",
    SUCCESS = "success",
    ERROR = "error"
}

export interface FormData {
    title: string;
    notes: string;
    notificationChannels: string[];
    notificationFrequency: string;
    eventTypes: string[];
}

export enum Frequency {
    instant = "instant",
    daily = "daily",
    weekly = "weekly"
}

export enum NoticationChannels {
    email = "email",
    iq = "iq",
    slack = "slack",
    push = "push",
    sms = "sms"
}

export interface SelectionItem {
    id: Frequency | NoticationChannels | YachtStates;
    label: string;
}

export enum YachtStates {
    enter = "entered",
    left = "left",
    cross = "crossed",
    stay = "stayed"
}
