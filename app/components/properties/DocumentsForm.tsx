'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsCloudUpload, BsTrash } from 'react-icons/bs';
import Image from 'next/image';

interface DocumentsFormProps {
    data: {
        documents: Array<{
            id: string;
            file: File;
            preview: string;
        }>;
    };
    onUpdate: (data: Partial<{ documents: Array<{ id: string; file: File; preview: string }> }>) => void;
    onNext: () => void;
    onBack: () => void;
}

const DocumentsForm = ({ data, onUpdate, onNext, onBack }: DocumentsFormProps) => {
    const [isProcessing, setIsProcessing] = useState(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setIsProcessing(true);
        const newDocuments = acceptedFiles.map(file => ({
            id: Math.random().toString(36).substr(2, 9),
            file,
            preview: URL.createObjectURL(file)
        }));

        // Add watermark to previews (in a real app, you'd use a proper watermark library)
        setTimeout(() => {
            onUpdate({ documents: [...data.documents, ...newDocuments] });
            setIsProcessing(false);
        }, 1000);
    }, [data.documents, onUpdate]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png'],
            'application/pdf': ['.pdf']
        }
    });

    const removeDocument = (id: string) => {
        onUpdate({
            documents: data.documents.filter(doc => doc.id !== id)
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div
                {...getRootProps()}
                className={`
                    border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition
                    ${isDragActive ? 'border-[#0a7d95] bg-[#0a7d95]/5' : 'border-gray-300 hover:border-gray-400'}
                `}
            >
                <input {...getInputProps()} />
                <BsCloudUpload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-gray-900">Drag & drop files here, or click to select files</p>
                <p className="mt-1 text-sm text-gray-500">
                    Support for JPG, PNG, and PDF. Max file size 10MB.
                </p>
            </div>

            {isProcessing && (
                <div className="text-center text-gray-500">
                    Processing files...
                </div>
            )}

            {data.documents.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                    {data.documents.map((doc) => (
                        <div key={doc.id} className="relative group">
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
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        type="button"
                                        onClick={() => removeDocument(doc.id)}
                                        className="absolute top-2 right-2 p-2 bg-white rounded-full text-red-500 hover:text-red-700"
                                    >
                                        <BsTrash />
                                    </button>
                                </div>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 truncate">
                                {doc.file.name}
                            </p>
                        </div>
                    ))}
                </div>
            )}

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
                    disabled={data.documents.length === 0}
                    className="px-6 py-2 bg-[#0a7d95] text-white rounded-lg hover:bg-[#086577] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next Step
                </button>
            </div>
        </form>
    );
};

export default DocumentsForm; 