import { QueryClientProvider, QueryClient} from "react-query"
import React from 'react'
import LineSpeed from "../Charts/LineSpeed";


const queryClient2=new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        refetchOnMount:true
        

      },
    },
  });

export default function LinePage() {
  return (
      <QueryClientProvider client={queryClient2}>
          <LineSpeed/>
      </QueryClientProvider>
    
  )
}
