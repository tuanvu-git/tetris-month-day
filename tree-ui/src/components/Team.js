import React,{ useContext,useMemo } from "react";
import { OKRContext } from "./ContextProvider";
import OKR from './OKR';

const Team = ({ data: team }) => {
  const { toggleTeam } = useContext(OKRContext);
  return useMemo(
    (_) => {
      console.log("team memo");
      return (
        <>
          <div className="p-0 title-hierarchy-line margin-bottom-15px team-cluster">
            <div
              className="d-flex mb-2 title-links-company position-relative"
              onClick={() => toggleTeam(team.departmentId, team.id)}
            >
              <div className="updown-unlinked-icon d-lg-flex align-items-center updown-unlinked-icon-before">
                <div className="d-lg-block d-none">
                  <img
                    alt=""
                    className="d-block cursor arrow-up arrow-up-first-child"
                    src="./okr2_files/arrow_drop_right_24px-dd93e705a7aa1d09f17330b617912423a298bbb482c554194491043f145ebba6.svg"
                  />
                  <img
                    alt=""
                    className="d-none cursor arrow-down arrow-down-first-child"
                    src="./okr2_files/arrow_drop_down_24px-8f91132ec2b189b1b833fc4c7fccd2d3b98731730b3a44ab4011480a5bcafb59.svg"
                  />
                </div>
              </div>
              <img
                alt=""
                className="height-40px padding-right-10px"
                src="./okr2_files/visualization-team-icon-c4abfa34bae8d3ceae07e6e35fcbb9a1c4b6ff9e788d4813475fe0a02588e4b6.svg"
              />
              <div className="font-weight-bold font-size-18px color-gray-100 align-self-center w-100 d-flex justify-content-between align-items-center position-relative title-okrs">
                <span className="my-handle-team d-none">
                  <img
                    alt=""
                    src="./okr2_files/reorder-ele-icon-0dfcdd447cff91d813b3692aeb2b4c37afb17ea477afe8c8f2a3e8a7b9595cb6.svg"
                    width="15"
                    height="18"
                  />
                </span>

                <div className="flex">
                  <div>
                    <a
                      className="font-size-16px color-gray-100"
                      href="https://app.sugarokr.com/en/pages/teams/5893?quarter=3&amp;year=2023"
                    >
                      {team.name}
                    </a>
                  </div>
                  <div className="process_title" id="team-5893">
                    <div className="process_title__1">
                      <span className="font-size-16px">
                        <span className="">- </span>Progress
                        <span className="progress-team color-green-100">
                          86%
                        </span>
                        | Score
                        <span className="score-team color-green-100">
                          0.9 (On Track)
                        </span>
                      </span>
                      <img
                        alt=""
                        className="margin-left-5px margin-bottom-3px show-teamleader-and-member"
                        src="./okr2_files/new-user-group-d87da54657881c501aa12fe2c09088d1a6a08ccd48b396d385cf707d4aa86f5d.svg"
                      />
                    </div>
                    <div className="process_title__2">
                      <span className="font-size-16px">
                        Progress
                        <span className="progress-team color-green-100">
                          86%
                        </span>
                        | Score
                        <span className="score-team color-green-100">
                          0.9 (On Track)
                        </span>
                      </span>
                      <img
                        alt=""
                        className="margin-left-5px margin-bottom-3px show-teamleader-and-member"
                        src="./okr2_files/new-user-group-d87da54657881c501aa12fe2c09088d1a6a08ccd48b396d385cf707d4aa86f5d.svg"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <img
                    alt=""
                    className="d-block d-lg-none cursor"
                    src="./okr2_files/arrow_drop_down_24px-8f91132ec2b189b1b833fc4c7fccd2d3b98731730b3a44ab4011480a5bcafb59.svg"
                  />
                </div>
              </div>
            </div>
            <div hidden={!team.isExpend}>
              <OKR data={team.children} />
            </div>
          </div>
        </>
      );
    },
    [team, toggleTeam]
  );
};

// Team.displayName = 'Team';
export default Team;
