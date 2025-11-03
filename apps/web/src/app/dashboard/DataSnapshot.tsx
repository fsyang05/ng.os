import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function DataSnapshot() {
  return (
    <div className="px-12">
      <h2 className="text-xl font-semibold mb-6">Data Snapshot</h2>
      <div className="flex flex-cols-1 md:flex-cols-2 gap-6">
        <Card className="py-8 bg-green-50 border-green-200">
        <CardHeader className="min-w-[300px]">
          <CardTitle className="text-xl">Calls in Last 24 Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-semibold">27</span>
            <span className="text-sm text-gray-500">total</span>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            Peak hour: 10–11 AM
          </div>
        </CardContent>
      </Card>

      <Card className="py-8 bg-green-50 border-green-200">
        <CardHeader className="min-w-[300px]">
          <CardTitle className="text-xl">Call Minutes This Month</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-semibold">412</span>
            <span className="text-sm text-gray-500">minutes</span>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            Avg/day: 14m
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}

