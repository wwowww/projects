"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useModelStore } from "@/store/model";

const MODELS = ["gpt-3.5-turbo", "gpt-4", "gpt-4o"];

const ModelSelect = () => {
  const { model: currentModel, updateModel } = useModelStore((state) => ({
    model: state.model,
    updateModel: state.updateModel,
  }));

  const handleChange = (selectModel: string) => {
    updateModel(selectModel);
  };

  return (
    <Select value={currentModel} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px] border-none text-xl focus:ring-transparent">
        <SelectValue placeholder="모델 선택" />
      </SelectTrigger>
      <SelectContent>
        {MODELS.map((model) => (
          <SelectItem
            key={model}
            value={model}
            disabled={currentModel === model}
          >
            {model}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default ModelSelect;