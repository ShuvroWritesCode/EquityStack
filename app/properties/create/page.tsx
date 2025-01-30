'use client';

import { useState } from 'react';
import Container from "@/app/components/Container";
import ListingSteps from "@/app/components/properties/ListingSteps";
import BasicInfoForm from "@/app/components/properties/BasicInfoForm";
import AssetTypeForm from "@/app/components/properties/AssetTypeForm";
import DetailsForm from "@/app/components/properties/DetailsForm";
import DocumentsForm from "@/app/components/properties/DocumentsForm";
import ReviewForm from "@/app/components/properties/ReviewForm";

const steps = [
    { id: 1, name: 'Basic Info' },
    { id: 2, name: 'Asset Type' },
    { id: 3, name: 'Property Details' },
    { id: 4, name: 'Documents' },
    { id: 5, name: 'Review' }
];

const CreatePropertyPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        assetType: '',
        area: '',
        expectedPrice: '',
        documents: []
    });

    const handleNext = () => {
        setCurrentStep(prev => Math.min(prev + 1, steps.length));
    };

    const handleBack = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const updateFormData = (data: Partial<typeof formData>) => {
        setFormData(prev => ({ ...prev, ...data }));
    };

    return (
        <div className="min-h-screen bg-white">
            <Container>
                <div className="pt-32 pb-8">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-gray-900">List Your Property</h1>
                        <p className="text-lg text-gray-500 mt-2">Share your property details with potential buyers</p>
                    </div>

                    {/* Steps Progress */}
                    <ListingSteps steps={steps} currentStep={currentStep} />

                    {/* Form Section */}
                    <div className="max-w-3xl mx-auto mt-8">
                        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8">
                            {currentStep === 1 && (
                                <BasicInfoForm 
                                    data={formData} 
                                    onUpdate={updateFormData}
                                    onNext={handleNext}
                                />
                            )}
                            {currentStep === 2 && (
                                <AssetTypeForm 
                                    data={formData} 
                                    onUpdate={updateFormData}
                                    onNext={handleNext}
                                    onBack={handleBack}
                                />
                            )}
                            {currentStep === 3 && (
                                <DetailsForm 
                                    data={formData} 
                                    onUpdate={updateFormData}
                                    onNext={handleNext}
                                    onBack={handleBack}
                                />
                            )}
                            {currentStep === 4 && (
                                <DocumentsForm 
                                    data={formData} 
                                    onUpdate={updateFormData}
                                    onNext={handleNext}
                                    onBack={handleBack}
                                />
                            )}
                            {currentStep === 5 && (
                                <ReviewForm 
                                    data={formData}
                                    onSubmit={() => console.log('Submit:', formData)}
                                    onBack={handleBack}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CreatePropertyPage; 