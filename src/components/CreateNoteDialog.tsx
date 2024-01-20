"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Loader2, Plus } from "lucide-react";
import { Input } from "./ui/input";
import axios from "axios";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type Props = {};

const CreateNoteDialog = (props: Props) => {
    const [input, setInput] = React.useState("");
  return (
    <Dialog>
      <DialogTrigger>
        <div className="border-dashed border-2 flex border-rose-300 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
          <Plus className="w-6 h-6 text-rose-500" strokeWidth={3} />
          <h2 className="font-600 text-gradient font-mont sm:mt-2">
            New Note Book
          </h2>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Note Book</DialogTitle>
          <DialogDescription>
            You can create a new note by clicking the button below.
          </DialogDescription>
        </DialogHeader>
        {/* <form onSubmit={handleSubmit}> */}
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Name..."
          />
          <div className="h-4"></div>
          <div className="flex items-center gap-2">
            <Button type="reset" variant={"secondary"}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient"
              // disabled={createNotebook.isLoading}
            >
              {/* {createNotebook.isLoading && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              )} */}
              Create
            </Button>
          </div>
        {/* </form> */}
      </DialogContent>
    </Dialog>
  );
}

export default CreateNoteDialog