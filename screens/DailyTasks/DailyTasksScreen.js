import TaskTopSection from "../../components/molecules/TaskTopSection";
import styles from "./DailyTasks.module.css";

const DailyTasksScreen = () => {
  return (
    <div className={styles.iphone1415Pro2}>
      <TaskTopSection />
      {/* <div className={styles.appBar}>
        <div className={styles.appBarChild} />
        <img
          className={styles.columnHorizontal01Icon}
          alt=""
          src="/columnhorizontal01@2x.png"
        />
        <img className={styles.home03Icon} alt="" src="/home03@2x.png" />
        <img
          className={styles.lightningFilledIcon}
          alt=""
          src="/lightningfilled@2x.png"
        />
        <div className={styles.avatar}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <div className={styles.avatarNotification}>
            <div className={styles.amount}>10</div>
          </div>
          <img
            className={styles.avatarStatusIndicator}
            alt=""
            src="/-avatar-status-indicator@2x.png"
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.goodMorningWrapper}>
          <div className={styles.goodMorning}>Good Afternoon Sharukh</div>
        </div>
        <div className={styles.calendar03Wrapper}>
          <img
            className={styles.calendar03Icon}
            alt=""
            src="/calendar03@2x.png"
          />
        </div>
      </div>
      <div className={styles.goodMorning1}>Today’s Tasks</div>
      <div className={styles.componentsWrapper}>
        <div className={styles.components}>
          <div className={styles.dateDisplayParent}>
            <div className={styles.dateDisplay}>
              <div className={styles.tueParent}>
                <div className={styles.tue}>Tue</div>
                <div className={styles.div}>5</div>
              </div>
              <div className={styles.face}>
                <div className={styles.happy}>
                  <div className={styles.happy}>
                    <img
                      className={styles.bitmapIcon}
                      alt=""
                      src="/bitmap@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dateDisplay1}>
              <div className={styles.tueParent}>
                <div className={styles.tue}>Wed</div>
                <div className={styles.div}>6</div>
              </div>
              <div className={styles.face1}>
                <div className={styles.happy}>
                  <div className={styles.happy}>
                    <img
                      className={styles.bitmapIcon}
                      alt=""
                      src="/bitmap@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dateDisplay2}>
              <div className={styles.tueParent}>
                <div className={styles.tue}>Thu</div>
                <div className={styles.div}>7</div>
              </div>
              <div className={styles.face2}>
                <div className={styles.happy}>
                  <div className={styles.happy}>
                    <img
                      className={styles.bitmapIcon}
                      alt=""
                      src="/bitmap@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dateDisplay3}>
              <div className={styles.friParent}>
                <div className={styles.tue}>Fri</div>
                <div className={styles.div3}>8</div>
              </div>
            </div>
            <div className={styles.dateDisplay4}>
              <div className={styles.satParent}>
                <div className={styles.tue}>Sat</div>
                <div className={styles.div}>9</div>
              </div>
            </div>
            <div className={styles.dateDisplay5}>
              <div className={styles.sunParent}>
                <div className={styles.tue}>Sun</div>
                <div className={styles.div}>10</div>
              </div>
            </div>
            <div className={styles.dateDisplay6}>
              <div className={styles.sunParent}>
                <div className={styles.tue}>Mon</div>
                <div className={styles.div}>11</div>
              </div>
            </div>
          </div>
          <img className={styles.icons} alt="" src="/icons@2x.png" />
          <img className={styles.icons1} alt="" src="/icons@2x.png" />
          <div className={styles.face3}>
            <div className={styles.happy}>
              <div className={styles.happy}>
                <img
                  className={styles.bitmapIcon}
                  alt=""
                  src="/bitmap@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.groupWrapper}>
            <img className={styles.groupIcon} alt="" src="/group@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.iphone1415Pro2Child} />
      <div className={styles.am}>{`5:30 AM `}</div>
      <div className={styles.am1}>{`11:30 AM `}</div>
      <div className={styles.iphone1415Pro2Item} />
      <div className={styles.goodMorning2}>Go to gym</div>
      <div className={styles.iphone1415Pro2Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.iphone1415Pro2Child1} />
      <div className={styles.iphone1415Pro2Child2} />
      <div className={styles.lineDiv} />
      <div className={styles.verticaltimersection}>
        <div className={styles.verticaltimersectionChild} />
        <div className={styles.pm}>{`1:30 PM `}</div>
        <div className={styles.pm1}>{`2:30 PM `}</div>
        <div className={styles.pm2}>{`3:00 PM `}</div>
        <div className={styles.pm3}>{`4:10 PM `}</div>
        <div className={styles.verticaltimersectionItem} />
        <div className={styles.verticaltimersectionInner} />
        <div className={styles.verticaltimersectionChild1} />
      </div>
      <div className={styles.groupeddaysectiontasks}>
        <div className={styles.groupeddaysectiontasksChild} />
        <div className={styles.goodMorning3}>4 tasks</div>
        <b className={styles.pm12}>6 PM - 12 AM</b>
      </div>
      <img
        className={styles.floatinglineIcon}
        alt=""
        src="/floatingline@2x.png"
      />
      <div className={styles.clock}>
        <div className={styles.happy}>
          <div className={styles.floatingClockChild} />
          <div className={styles.floatingClockItem} />
          <div className={styles.pm4}>{`1:30 PM `}</div>
        </div>
      </div>
      <div className={styles.iphone1415Pro2Child3} />
      <div className={styles.goodMorning4}>Standup Meeting with office</div>
      <div className={styles.iphone1415Pro2Child4} />
      <div className={styles.iphone1415Pro2Child5} />
      <div className={styles.iphone1415Pro2Child6} />
      <img className={styles.addtaskIcon} alt="" src="/addtask@2x.png" />
      <div className={styles.goodMorning5}>Breakfast</div>
      <div className={styles.goodMorning6}>News</div>
      <div className={styles.categorypill}>
        <div className={styles.categorypillChild} />
        <div className={styles.work}>work</div>
      </div>
      <div className={styles.categorypill1}>
        <div className={styles.categorypillItem} />
        <div className={styles.work}>daily</div>
      </div>
      <div className={styles.categorypill2}>
        <div className={styles.categorypillItem} />
        <div className={styles.work}>daily</div>
      </div>
      <div className={styles.categorypill3}>
        <div className={styles.categorypillItem} />
        <div className={styles.work}>daily</div>
      </div> */}
    </div>
  );
};

export default DailyTasksScreen;
