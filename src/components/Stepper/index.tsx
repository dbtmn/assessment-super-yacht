import React from "react";

interface StepperProps {
    onStepClick: (step: number) => void;
}

// const steps = [1, 2, 3, 4];
const steps = [
    { value: 1, label: "first", isVisited: true },
    { value: 2, label: "second", isVisited: false },
    { value: 3, label: "third", isVisited: false },
    { value: 4, label: "fourth", isVisited: false }];

interface StepItem {
    value: number;
    label: string;
    isVisited: boolean;
}

const Stepper: React.FunctionComponent<StepperProps> = (props) => {
    const { onStepClick } = props;
    const [activeStep, setActiveStep] = React.useState<number>(1);

    const defaultStepClassName = "bg-gray-100 border-gray border-2";
    const activeStepClassName = "bg-gray-100 border-black border-2";
    const visitedStepClassName = "bg-black text-white";
    const borderClassName = "flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block";

    const handleStepClick = (step: number, index: number) => {
        setActiveStep(step);
        onStepClick(step);

        if (step === 3 && steps[steps.length - 1].isVisited) {
            steps[steps.length - 1].isVisited = false;
        }
        steps[index].isVisited = !steps[index].isVisited;
    }

    const getStepClassName = (step: StepItem) => {
        if (step.isVisited && step.value !== activeStep) {
            return visitedStepClassName;
        }
        else if (step.value === activeStep) {
            return activeStepClassName;
        }
        return defaultStepClassName;
    }

    return <ol className="flex items-center w-full mb-4 sm:mb-5">
        {steps.map((step, index) => {
            return <li
                className={(step.value === 1 || step.value !== steps.length) ? borderClassName : ""}
                onClick={() => handleStepClick(step.value, index)}
            >
                <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${getStepClassName(step)} `}/* activeStep === step ? activeStepClassName : defaultStepClassName */>
                    {step.value}
                </div>
            </li>
        })}
    </ol>;
}

export default Stepper;