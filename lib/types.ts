type Img = {
  src: string;
};
type ImageSliderProps = {
  imagesList: Img[];
};
type InputFieldProps = {
  type: "text" | "password" | "number" | "email";
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  compRef?: React.RefObject<HTMLInputElement>;
  value: string | number;
  missing: boolean;
  onChange?: (input: string | number) => void;
};
type SelectProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  selected: boolean;
  onChange: (color: boolean) => void;
};
type TextAreaFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange?: (input: string | number) => void;
};
type FormProps = {
  name: string;
  email: string;
  phone: string;
  idea: string;
  body: string;
  size: string;
  color: boolean;
  images?: string[];
  date: Date;
};
type ImageDropProps = {
  images: string[];
  onChange: (imageUrl: string) => void;
  onClick: (index: number) => void;
};
type Calendar = {
  selectedDay?: Date | null;
  missing: boolean;
  onClick: (day: Date) => void;
};
