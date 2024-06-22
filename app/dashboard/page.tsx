import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Manage Application "BSSN Information System"
        </h2>
        <div className="flex items-center space-x-2"></div>
      </div>

      <div className="space-y-4 w-1/2">
        <Card>
          <CardHeader>
            <CardTitle>Application Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <Label>Name</Label>
                <Input value="BSSN Information System" />
              </div>
              <div>
                <Label>API Key</Label>
                <Input value="78b71f80faaf1bd52e4296e111f0b72e5691e04cbfc188dfe485cd916dc2808a" />
                <p className="text-[0.8rem] text-muted-foreground">
                  API Key yang akan digunakan sebagai identitas untuk aplikasi
                  yang akan melakukan integrasi.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>IP Whitelist</CardTitle>
            <CardDescription>
              Daftar IP yang diizinkan untuk melakukan request ke API PSE
              Lingkup Privat
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label>New Allowed IP</Label>
              <div className="flex gap-2">
                <Input placeholder="123.123.123.123" />
                <Button variant={"secondary"}>Add IP</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
