import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AutentikasiAPIPage = () => {
  return (
    <div className="container mt-4">
      <div className="flex w-full justify-end">
        <Button>New Application</Button>
      </div>
      <Table>
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
    </div>
  );
};

export default AutentikasiAPIPage;
