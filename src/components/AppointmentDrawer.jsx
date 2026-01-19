import { AppointmentForm } from "./AppointmentForm";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

export function AppointmentDrawer() {
  return (
    <Drawer>
      {/* OPEN BUTTON */}
      <DrawerTrigger asChild>
        <Button className="rounded-full bg-matri-green px-6 py-2 text-sm">
          Book Consultation
        </Button>
      </DrawerTrigger>

      {/* DRAWER BODY */}
      <DrawerContent className="max-h-[90vh] overflow-y-auto">
        <DrawerHeader>
          <DrawerTitle>Book Matricharya Consultation</DrawerTitle>
          <DrawerDescription>
            Ayurvedic care for women — cycle, fertility, pregnancy & recovery
          </DrawerDescription>
        </DrawerHeader>

        {/* FORM */}
        <div className="px-4 pb-28">
          <AppointmentForm />
        </div>

        {/* CLOSE BUTTON — INSIDE DRAWER */}
        <div className="px-4 pb-4">
          <DrawerClose asChild>
            <button className="w-full text-xs text-matri-deep/60">Close</button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
