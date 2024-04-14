import FullCOntainerForWeek from "./FullContainerWeek";
import styles from "./TaskTopSection.module.css";

const TaskTopSection = () => {
  return (
    <div className={styles.componentsWrapper}>
      <FullCOntainerForWeek
        showFace={false}
        faceVisible={false}
        faceVisible1={false}
        showIcons={false}
        iconsVisible={false}
        faceVisible2={false}
        showFrameDiv={false}
        property1Variant3Width="354px"
        property1Variant3Height="95px"
        property1Variant3Position="relative"
        property1Variant3FlexShrink="0"
        divFontFamily="Podkova"
        divFontFamily1="Podkova"
        divFontFamily2="Podkova"
        friColor="#a1bbff"
        divFontFamily3="Podkova"
        divColor="#a1bbff"
        divFontFamily4="Podkova"
        divFontFamily5="Podkova"
        divFontFamily6="Podkova"
      />
    </div>
  );
};

export default TaskTopSection;
