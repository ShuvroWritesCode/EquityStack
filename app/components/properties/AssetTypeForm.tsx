'use client';

import { BsHouseDoor, BsTree } from 'react-icons/bs';

interface AssetTypeFormProps {
    data: {
        assetType: string;
    };
    onUpdate: (data: Partial<{ assetType: string }>) => void;
    onNext: () => void;
    onBack: () => void;
}

const AssetTypeForm = ({ data, onUpdate, onNext, onBack }: AssetTypeFormProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div
                    className={`
                        p-6 border-2 rounded-lg cursor-pointer transition
                        ${data.assetType === 'home'
                            ? 'border-[#0a7d95] bg-[#0a7d95]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }
                    `}
                    onClick={() => onUpdate({ assetType: 'home' })}
                >
                    <div className="flex flex-col items-center text-center">
                        <BsHouseDoor 
                            size={40} 
                            className={data.assetType === 'home' ? 'text-[#0a7d95]' : 'text-gray-400'} 
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-900">Home</h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Residential property including houses, apartments, and condos
                        </p>
                    </div>
                </div>

                <div
                    className={`
                        p-6 border-2 rounded-lg cursor-pointer transition
                        ${data.assetType === 'land'
                            ? 'border-[#0a7d95] bg-[#0a7d95]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }
                    `}
                    onClick={() => onUpdate({ assetType: 'land' })}
                >
                    <div className="flex flex-col items-center text-center">
                        <BsTree 
                            size={40} 
                            className={data.assetType === 'land' ? 'text-[#0a7d95]' : 'text-gray-400'} 
                        />
                        <h3 className="mt-4 text-lg font-medium text-gray-900">Land</h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Vacant land or plots ready for development
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between pt-6">
                <button
                    type="button"
                    onClick={onBack}
                    className="px-6 py-2 text-gray-600 hover:text-gray-900 transition"
                >
                    Back
                </button>
                <button
                    type="submit"
                    disabled={!data.assetType}
                    className="px-6 py-2 bg-[#0a7d95] text-white rounded-lg hover:bg-[#086577] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next Step
                </button>
            </div>
        </form>
    );
};

export default AssetTypeForm; 