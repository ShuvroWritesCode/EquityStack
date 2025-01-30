'use client';

interface BasicInfoFormProps {
    data: {
        name: string;
        phone: string;
        address: string;
    };
    onUpdate: (data: Partial<{ name: string; phone: string; address: string; }>) => void;
    onNext: () => void;
}

const BasicInfoForm = ({ data, onUpdate, onNext }: BasicInfoFormProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                </label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => onUpdate({ name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a7d95] focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                </label>
                <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => onUpdate({ phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a7d95] focus:border-transparent"
                    placeholder="Enter your phone number"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address
                </label>
                <textarea
                    value={data.address}
                    onChange={(e) => onUpdate({ address: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a7d95] focus:border-transparent"
                    placeholder="Enter property address"
                    rows={3}
                    required
                />
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="px-6 py-2 bg-[#0a7d95] text-white rounded-lg hover:bg-[#086577] transition"
                >
                    Next Step
                </button>
            </div>
        </form>
    );
};

export default BasicInfoForm; 