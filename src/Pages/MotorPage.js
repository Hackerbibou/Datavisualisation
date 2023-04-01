import { QueryClientProvider, QueryClient} from "react-query"
import React from 'react'
import MotorRpm from "../Charts/MotorRpm";

const queryClient3=new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        refetchOnMount:true
      },
    },
  });

export default function MotorPage() {
  return (
    <QueryClientProvider client={queryClient3}>
    <MotorRpm/>
</QueryClientProvider>
    
  )
}
