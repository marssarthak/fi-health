"use client";
import React from "react";
import { RequestCategories } from "./RequestCategories";
import { OverduePayments } from "./OverduePayments";
import { CashFlowAnalysis } from "./CashFlowAnalysis";
import { PaymentPatterns } from "./PaymentPatterns";
import { WalletOverview } from "./WalletOverview";

export const AnalysisDashboard = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <WalletOverview />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <RequestCategories />
          <OverduePayments />
        </div>

        <div className="mt-8">
          <CashFlowAnalysis />
        </div>

        <div className="mt-8">
          <PaymentPatterns />
        </div>
      </div>
    </div>
  );
};