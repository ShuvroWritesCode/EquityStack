'use client';

interface DetailsFormProps {
    data: {
        area: string;
        expectedPrice: string;
    };
    onUpdate: (data: Partial<{ area: string; expectedPrice: string }>) => void;
    onNext: () => void;
    onBack: () => void;
}

const DetailsForm = ({ data, onUpdate, onNext, onBack }: DetailsFormProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    const formatPrice = (value: string) => {
        // Remove non-numeric characters
        const numericValue = value.replace(/[^0-9]/g, '');
        // Format with commas
        return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Area (sq ft)
                </label>
                <div className="relative">
                    <input
                        type="text"
                        value={data.area}
                        onChange={(e) => onUpdate({ area: e.target.value.replace(/[^0-9]/g, '') })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a7d95] focus:border-transparent"
                        placeholder="Enter property area"
                        required
                    />
                    <span className="absolute right-4 top-2 text-gray-500">sq ft</span>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Price (USD)
                </label>
                <div className="relative">
                    <span className="absolute left-4 top-2 text-gray-500">$</span>
                    <input
                        type="text"
                        value={data.expectedPrice}
                        onChange={(e) => onUpdate({ expectedPrice: formatPrice(e.target.value) })}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a7d95] focus:border-transparent"
                        placeholder="Enter expected price"
                        required
                    />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                    Enter the price without decimals
                </p>
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
                    disabled={!data.area || !data.expectedPrice}
                    className="px-6 py-2 bg-[#0a7d95] text-white rounded-lg hover:bg-[#086577] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next Step
                </button>
            </div>
        </form>
    );
};

export default DetailsForm; 