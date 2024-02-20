"use client";

import { Button } from "@/components-ui/ui/button";
import { ToastAction } from "@/components-ui/ui/toast";
import { useToast } from "@/components-ui/ui/use-toast";
import { Toaster } from "@/components-ui/ui/toaster";
export default function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="">
      <Toaster />
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          toast({
            title: "Submited",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction
                altText="Goto schedule to undo"
                className="text-white"
              >
                Undo
              </ToastAction>
            ),
          });
        }}
      >
        Submit
      </Button>
    </div>
  );
}
