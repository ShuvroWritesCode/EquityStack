'use client';

interface Step {
    id: number;
    name: string;
}

interface ListingStepsProps {
    steps: Step[];
    currentStep: number;
}

const ListingSteps = ({ steps, currentStep }: ListingStepsProps) => {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="relative">
                {/* Progress Bar */}
                <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200">
                    <div 
                        className="absolute top-0 left-0 h-full bg-[#0a7d95] transition-all duration-500"
                        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    />
                </div>

                {/* Steps */}
                <div className="relative flex justify-between">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center">
                            <div 
                                className={`
                                    w-10 h-10 rounded-full flex items-center justify-center 
                                    border-2 transition-colors duration-300
                                    ${step.id <= currentStep 
                                        ? 'border-[#0a7d95] bg-[#0a7d95] text-white' 
                                        : 'border-gray-300 bg-white text-gray-500'
                                    }
                                `}
                            >
                                {step.id}
                            </div>
                            <span 
                                className={`
                                    mt-2 text-sm font-medium
                                    ${step.id <= currentStep ? 'text-gray-900' : 'text-gray-500'}
                                `}
                            >
                                {step.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListingSteps; 