import Opdatering from "./Opdatering";

const MobilSide = () => {
  return (
    <div className="bg-beige flex justify-center px-4 py-10">
      <div className="flex flex-col items-center text-center max-w-sm">
        <h2 className="mb-7 text-2xl font-semibold">
          Velkommen, Camilla & Micheal
        </h2>
        <p className="mb-4">
          Her kan du se, hvor langt dit hus er i byggeprocessen.
          <br />
          <br />
          Vi ved, du venter spændt – og imens vi bygger, kan du her i app’en
          følge med gennem billeder fra de vigtigste milepæle.
          <br />
          <br />
          Det bliver kun mere virkeligt for hver opdatering.
        </p>
        <p className="text-lg font-medium text-orange">
          68 dage til aflevering
        </p>
        <Opdatering />
      </div>
    </div>
  );
};

export default MobilSide;
