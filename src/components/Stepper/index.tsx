import React, { useEffect } from "react";

interface StepItem {
    value: number;
    label: string;
    isVisited: boolean;
}

interface StepperProps {
    steps: StepItem[];
    activeStep: number;
}

const Stepper: React.FunctionComponent<StepperProps> = (props) => {
    const { steps, activeStep } = props;

    const defaultStepClassName = "bg-gray-100 border-gray border-2";
    const activeStepClassName = "bg-gray-100 border-black border-2";
    const visitedStepClassName = "bg-black text-white";
    const borderClassName = "flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block";

    const getStepClassName = (step: StepItem) => {
        let className = "";
        if(activeStep === step.value) {
            className += ` ${activeStepClassName}`;
        }
        else if(activeStep > step.value) {
            className += ` ${visitedStepClassName}`;
        }
        else {
            className += ` ${defaultStepClassName}`;
        }
        return className;
      }

    return <ol className="flex items-center w-full mb-4 sm:mb-5">
        {steps.map((step, index) => {
            return <li key={`step-${index}`}
                className={(step.value === 1 || step.value !== steps.length) ? borderClassName : ""}
            >
                <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${getStepClassName(step)} `}/* activeStep === step ? activeStepClassName : defaultStepClassName */>
                    {step.value}
                </div>
            </li>
        })}
    </ol>;
}

export default Stepper;