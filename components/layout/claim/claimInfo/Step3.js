"use client";

import useClaim from "@/hooks/useClaim";
import useWallet from "@/hooks/useWallet";
import { setStep } from "@/redux/slice/claimSlice";
import config from "@/utils/config";
import { Button } from "@material-tailwind/react";
import { PackageCheck } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function Step3() {
  const params = useParams();
  const id = params.id;
  const selectedChain = config.find((chain) => chain.chainId === Number(id));
  const router = useRouter();
  const { switchChain, getDomain } = useWallet();
  const domain = getDomain();
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-gray-200 rounded-full h-[150px] w-[150px] flex items-center justify-center">
        <PackageCheck size={70} className="m-auto" />
      </div>

      <p className="text-sm font-light w-full px-4 text-center">
        Fusion is deployed on {selectedChain?.chainName}. Ready to switch to
        your new network?
      </p>

      <Button
        color="black"
        size="sm"
        className="rounded-lg mt-1 font-outfit normal-case w-full py-3 mb-2 font-light flex items-center justify-center gap-x-2"
        onClick={() => {
          switchChain(selectedChain.chainId);
          router.push("/dashboard?domain=" + domain);
          dispatch(setStep(0));
        }}
      >
        Switch to {selectedChain?.chainName}
      </Button>
    </>
  );
}
