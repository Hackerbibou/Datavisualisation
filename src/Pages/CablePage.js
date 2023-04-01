import { QueryClientProvider, QueryClient} from "react-query"
import React from 'react'
import CableDiameter from "../Charts/CableDiameter";



const queryClient1=new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        refetchOnMount:true
      },
    },
  });

export default function CablePage() {
  return (
      <QueryClientProvider client={queryClient1}>
            <CableDiameter/>
    </QueryClientProvider>
  )
}
