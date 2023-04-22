import React, { useState } from "react";
import Toggle from "@/components/Toggle";
import { Frequency, NoticationChannels, SelectionItem, YachtStates } from "@/types/FormData";

const notificationChannelsData: SelectionItem[] = [
    {
        id: NoticationChannels.iq,
        label: "SYT iQ notifications"
    },
    {
        id: NoticationChannels.email,
        label: "Email"
    },
    {
        id: NoticationChannels.push,
        label: "Mobile App Push Notification"
    }
];

const frequencyData: SelectionItem[] = [
    {
        id: Frequency.instant,
        label: "Instant"
    },
    {
        id: Frequency.daily,
        label: "Daily"
    },
    {
        id: Frequency.weekly,
        label: "Weekly"
    }
];

const yachtStatesData: SelectionItem[] = [
    {
        id: YachtStates.enter,
        label: "Yacht entered"
    },
    {
        id: YachtStates.left,
        label: "Yacht left"
    },
    {
        id: YachtStates.cross,
        label: "Yacht crossed"
    },
    {
        id: YachtStates.stay,
        label: "Yacht entered and stayed"
    }
];

interface FourthStepProps {
    onInputChange: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, v?: boolean) => void;
}

const FourthStep: React.FunctionComponent<FourthStepProps> = (props) => {
    const { onInputChange } = props;
    const [activeFrequency, setActiveFrequency] = useState("notificationFrequency-instant");

    const handleFrequencyChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setActiveFrequency(e.currentTarget.id);
        onInputChange(e);
    }

    return <>
        <div>
            <label className="text-xs uppercase font-bold">Notify me on</label>
            <div>
                {notificationChannelsData.map((notificationChannel) => (
                    <FourthStepToggleItem key={`fourth-step-toggle-${notificationChannel.id}`} label={notificationChannel.label} id={`notificationChannels-${notificationChannel.id}`} onToggleClick={onInputChange} />
                ))}
            </div>
        </div>
        <div>
            <label className="text-xs uppercase font-bold">Frequency</label>
            <div className="py-2 flex">
                {frequencyData.map((frequency) => (
                    <FrequencyItem label={frequency.label} id={`notificationFrequency-${frequency.id}`} isActive={activeFrequency === `notificationFrequency-${frequency.id}`} onClick={handleFrequencyChange} />
                ))}
            </div>
        </div>
        <div>
            <label className="text-xs uppercase font-bold">Type of event</label>
            <div>
                {yachtStatesData.map((yachtState) => (
                    <FourthStepToggleItem label={yachtState.label} id={`eventTypes-${yachtState.id}`} onToggleClick={onInputChange} />
                ))}
            </div>
        </div>
    </>;
}

const FourthStepToggleItem: React.FunctionComponent<{ label: string, id: string, onToggleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, v: boolean) => void }> = (props) => {
    const { label, id, onToggleClick } = props;

    return <div className="py-2 flex justify-between">
        <span>
            {label}
        </span>
        <span>
            <Toggle id={id} onChange={onToggleClick} />
        </span>
    </div>;
};

const FrequencyItem: React.FunctionComponent<{ label: string, id: string, isActive: boolean, onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }> = (props) => {
    const { label, id, isActive, onClick } = props;

    return <div id={id}
        className={
            "frequency-item p-1 mr-1 cursor-pointer " +
            "rounded-lg" +
            (isActive ? " border border-blue-600 text-sky-600" : " bg-neutral-300 text-gray-500")
        }
        onClick={(e) => onClick(e)}
    >
        {label}
    </div>
};

export default FourthStep;