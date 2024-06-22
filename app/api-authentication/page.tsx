import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AutentikasiAPIPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Authentication API
        </h2>
        <div className="flex items-center space-x-2"></div>
      </div>

      <div className="space-y-4 w-1/2">
        <Card className="pt-8">
          {/* <CardHeader>
            <CardTitle>Application Information</CardTitle>
          </CardHeader> */}
          <CardContent>
            <div className="flex w-full justify-end">
              <Button>New Application</Button>
            </div>
            <Table className="mt-4">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Application Name</TableHead>
                  <TableHead>API Key</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Kominfo</TableCell>
                  <TableCell>*************************</TableCell>
                  <TableCell className="flex">
                    <div className="flex flex-wrap gap-4 mx-auto">
                      <Button variant="secondary">Detail</Button>
                      <Button variant="destructive">Hapus</Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">PSE</TableCell>
                  <TableCell>*************************</TableCell>
                  <TableCell className="flex">
                    <div className="flex flex-wrap gap-4 mx-auto">
                      <Button variant="secondary">Detail</Button>
                      <Button variant="destructive">Hapus</Button>
                    </div>
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
