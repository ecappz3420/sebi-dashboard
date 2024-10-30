import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import fetchRecord from './API/fetchRecord';
const App = () => {

  const [criteria, setCriteria] = useState("");
  const [loading, setLoading] = useState(false);
  const [customerData, setCustomerData] = useState("");

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await ZOHO.CREATOR.init();
      const queryParams = await ZOHO.CREATOR.UTIL.getQueryParams();
      const customerObj = await fetchRecord(queryParams.customer);
      setCustomerData(customerObj);
      setCriteria(() => encodeURIComponent(`"Questionnaire Form"."Customer"=${queryParams.customer}`));
      setLoading(false);
    }
    fetch();
  }, [])
  return (
    <>
    {
      loading === true ?
      (
        <div>Loading...</div>
      )
      :
      (
        <div className='inter p-2 bg-slate-200'>
          <div className='p-2 rounded shadow text-end bg-white mb-3'>
            <div className='flex justify-between'>
              <div className='font-bold'>Dashboard</div>
              <div className='text-sm'>{customerData.Company_name}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className='rounded bg-white h-[250px] w-1/2 mb-3 shadow overflow-hidden'>
              <iframe src={`https://analytics.zoho.in/open-view/365962000000152673?ZOHO_CRITERIA=${criteria}`} width="100%" height="270px"></iframe>

            </div>
            <div className='rounded bg-white h-[250px] mb-3 w-1/2 shadow overflow-hidden'>
              <iframe src={`https://analytics.zoho.in/open-view/365962000000152312?ZOHO_CRITERIA=${criteria}`} width="100%" height="270px"></iframe>
            </div>
          </div>

          <div className='flex gap-2'>
            <div className='w-1/3'>
              <div className='text-xs font-semibold'>Governance</div>
              <div className='h-[250px] rounded-lg bg-white mb-3 border shadow p-2 overflow-hidden'>
                <iframe src={`https://analytics.zoho.in/open-view/365962000000152753?ZOHO_CRITERIA=${criteria}`} width="100%" height="260px"></iframe>
              </div>
            </div>
            <div className='w-1/3'>
              <div className='text-xs font-semibold'>Identify</div>
              <div className='h-[250px] rounded-lg bg-white mb-3 border shadow p-2 overflow-hidden'>
                <iframe src={`https://analytics.zoho.in/open-view/365962000000152842?ZOHO_CRITERIA=${criteria}`} width="100%" height="260px"></iframe>
              </div>
            </div>
            <div className='w-1/3'>
              <div className='text-xs font-semibold'>Protect</div>
              <div className='h-[250px] rounded-lg bg-white mb-3 border shadow p-2 overflow-hidden'>
                <iframe src={`https://analytics.zoho.in/open-view/365962000000152886?ZOHO_CRITERIA=${criteria}`} width="100%" height="260px"></iframe>
              </div>
            </div>

          </div>
          <div className='flex gap-2'>
            <div className='w-1/3'>
              <div className='text-xs font-semibold'>Detect</div>
              <div className='h-[250px] rounded-lg bg-white mb-3 border shadow p-2 overflow-hidden'>
                <iframe src={`https://analytics.zoho.in/open-view/365962000000152927?ZOHO_CRITERIA=${criteria}`} width="100%" height="260px"></iframe>
              </div>
            </div>
            <div className='w-1/3'>
              <div className='text-xs font-semibold'>Respond</div>
              <div className='h-[250px] rounded-lg bg-white mb-3 border shadow p-2 overflow-hidden'>
                <iframe src={`https://analytics.zoho.in/open-view/365962000000152975?ZOHO_CRITERIA=${criteria}`} width="100%" height="260px"></iframe>
              </div>
            </div>
            <div className='w-1/3'>
              <div className='text-xs font-semibold'>Recover</div>
              <div className='h-[250px] rounded-lg bg-white mb-3 border shadow p-2 overflow-hidden'>
                <iframe src={`https://analytics.zoho.in/open-view/365962000000156011?ZOHO_CRITERIA=${criteria}`} width="100%" height="260px"></iframe>
              </div>
            </div>

          </div>
          <div className='bg-white rounded shadow p-2 overflow-hidden'>
          <iframe src={`https://analytics.zoho.in/open-view/365962000000157024?ZOHO_CRITERIA=${criteria}`} width="100%" height="270px"></iframe>
          </div>

        </div>
      )
    }
    </>
    
    
  )
}

export default App