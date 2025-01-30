'use client';

import { BsCheck2Circle } from 'react-icons/bs';
import Image from 'next/image';

interface ReviewFormProps {
    data: {
        name: string;
        phone: string;
        address: string;
        assetType: string;
        area: string;
        expectedPrice: string;
        documents: Array<{
            id: string;
            file: File;
            preview: string;
        }>;
    };
    onSubmit: () => void;
    onBack: () => void;
}

const ReviewForm = ({ data, onSubmit, onBack }: ReviewFormProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    const InfoItem = ({ label, value }: { label: string; value: string }) => (
        <div className="py-3 border-b border-gray-200 last:border-0">
            <dt className="text-sm font-medium text-gray-500">{label}</dt>
            <dd className="mt-1 text-sm text-gray-900">{value}</dd>
        </div>
    );

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-[#0a7d95]/5 rounded-lg p-4 flex items-center gap-3">
                <BsCheck2Circle className="text-[#0a7d95] text-xl" />
                <p className="text-gray-700">Please review your property information before submitting.</p>
            </div>

            <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
                    <dl className="divide-y divide-gray-200">
                        <InfoItem label="Full Name" value={data.name} />
                        <InfoItem label="Phone Number" value={data.phone} />
                        <InfoItem label="Property Address" value={data.address} />
                    </dl>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Property Details</h3>
                    <dl className="divide-y divide-gray-200">
                        <InfoItem 
                            label="Asset Type" 
                            value={data.assetType.charAt(0).toUpperCase() + data.assetType.slice(1)} 
                        />
                        <InfoItem label="Area" value={`${data.area} sq ft`} />
                        <InfoItem label="Expected Price" value={`$${data.expectedPrice}`} />
                    </dl>
                </div>

                {data.documents.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Uploaded Documents</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {data.documents.map((doc) => (
                                <div key={doc.id} className="relative">
                                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200">
                                        {doc.file.type.includes('image') ? (
                                            <Image
                                                src={doc.preview}
                                                alt="Document preview"
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                                <p className="text-gray-500">PDF Document</p>
                                            </div>
                                        )}
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500 truncate">
                                        {doc.file.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
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
                    className="px-6 py-2 bg-[#0a7d95] text-white rounded-lg hover:bg-[#086577] transition"
                >
                    Submit Property
                </button>
            </div>
        </form>
    );
};

export default ReviewForm; 