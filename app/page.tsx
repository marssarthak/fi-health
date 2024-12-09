"use client"
import { AnalysisDashboard } from "@/components/dashboard/AnalysisDashboard";
import { Hero } from "@/components/Hero";
import { getRequestsForAddress } from "@/helper";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [addresses, setAddresses] = useState<string[]>([]);
  const [requests, setRequests] = useState<any[]>();

  useEffect(() => {
    if (addresses.length > 0) {
      console.log(addresses);
      getRequestsForAddress(addresses[0]).then((requests) => {
        setRequests(requests);
      })
    }
  }, [addresses]);
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main>
        {
          addresses.length <= 0 && (
            <Hero setAddresses={setAddresses} />
          )
        }

        {
          addresses.length > 0 && !requests && (
            <div className="min-h-screen flex items-center justify-center">
              Loading....
            </div>

          )

        }
        
        {
          requests && (
            <AnalysisDashboard requests={requests} />)
        }
      </main>
    </div>
  );
}
