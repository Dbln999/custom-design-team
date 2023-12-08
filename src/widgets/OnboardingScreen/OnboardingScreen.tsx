import cls from "./OnboardingScreen.module.css";

interface OnboardingScreenProps {
  src: string;
  text: string;
}
const OnboardingScreen = ({ src, text }: OnboardingScreenProps) => {
  return (
    <div className={cls.imageWrapper}>
      <img src={src} />
      <h1>{text}</h1>
    </div>
  );
};

export default OnboardingScreen;
