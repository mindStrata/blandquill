"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users } from "@/types/global-types";
import { convertUtcDateToLocal } from "@/utils/date-converter";
import { useState } from "react";

type Props = {
  userData: Users[];
  TableTitle: string;
};

export default function DataTable({ userData, TableTitle }: Props) {
  const [searchFilter, setSearchFilter] = useState<string>("");
  // to filter user based on email
  const filter = userData?.filter((user) =>
    user.email.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div>
      <div>
        <Card>
          <CardContent>
            <CardHeader>
              <CardTitle>{TableTitle}</CardTitle>
              <CardDescription>Manage users and their details</CardDescription>
            </CardHeader>
            <div className="my-3">
              <input
                className="w-full md:w-1/2 rounded-lg"
                placeholder="Filter emails"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
              />
            </div>
            <Table className="overflow-auto">
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>NAME</TableHead>
                  <TableHead>EMAIL</TableHead>
                  <TableHead>VERIFIED</TableHead>
                  <TableHead>ROLE</TableHead>
                  <TableHead>CREATED AT</TableHead>
                  <TableHead>UPDATED AT</TableHead>
                </TableRow>
              </TableHeader>
              {!filter.length ? (
                <div className="flex justify-center text-lg font-medium">
                  No data!
                </div>
              ) : (
                <TableBody>
                  {filter?.map((user) => {
                    return (
                      <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.isVerified}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          {convertUtcDateToLocal(String(user.createdAt))}
                        </TableCell>
                        <TableCell>
                          {convertUtcDateToLocal(String(user.updatedAt))}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              )}
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
