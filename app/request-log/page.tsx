import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function RequestLogPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Request Logs</h2>
        <div className="flex items-center space-x-2"></div>
      </div>

      <div className="space-y-4 w-full">
        <Card className="pt-8">
          <CardContent>
            <div className="flex gap-2">
              <Input
                placeholder="Email"
                defaultValue="2024/06/20 12:22:34"
                className="w-44"
              />
              -
              <Input
                placeholder="Email"
                defaultValue="2024/06/20 12:22:34"
                className="w-44"
              />
              <Button>Filter</Button>
            </div>
            <Table className="mt-4">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Time</TableHead>
                  <TableHead>IP</TableHead>
                  <TableHead>Application Name</TableHead>
                  <TableHead>Methode</TableHead>
                  <TableHead>URL</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead>Start Time</TableHead>
                  <TableHead>End Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    2024/06/20 12:22:34
                  </TableCell>
                  <TableCell className="font-medium">168.123.44.21</TableCell>
                  <TableCell className="font-medium">Kominfo</TableCell>
                  <TableCell className="font-medium">POST</TableCell>
                  <TableCell className="font-medium">
                    /api/v1/sistem-elektronik
                  </TableCell>
                  <TableCell className="font-medium">201</TableCell>
                  <TableCell className="font-medium">
                    2024/06/20 12:21:34
                  </TableCell>
                  <TableCell className="font-medium">
                    2024/06/20 12:22:34
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    2024/06/21 10:53:12
                  </TableCell>
                  <TableCell className="font-medium">145.99.123.11</TableCell>
                  <TableCell className="font-medium">Kominfo</TableCell>
                  <TableCell className="font-medium">GET</TableCell>
                  <TableCell className="font-medium">
                    /api/v1/sistem-elektronik/5324
                  </TableCell>
                  <TableCell className="font-medium">200</TableCell>
                  <TableCell className="font-medium">
                    2024/06/21 10:53:01
                  </TableCell>
                  <TableCell className="font-medium">
                    2024/06/21 10:53:12
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
