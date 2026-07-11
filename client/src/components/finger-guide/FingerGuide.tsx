import Finger from "./Finger";

interface FingerGuideProps {
  activeFinger: string;
}

const fingers = [
  "left-pinky",
  "left-ring",
  "left-middle",
  "left-index",
  "right-index",
  "right-middle",
  "right-ring",
  "right-pinky",
];

export default function FingerGuide({
  activeFinger,
}: FingerGuideProps) {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-xl font-semibold text-white">
        Recommended Finger
      </h3>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {fingers.map((finger) => (
          <Finger
            key={finger}
            name={finger}
            active={finger === activeFinger}
          />
        ))}
      </div>
    </div>
  );
}