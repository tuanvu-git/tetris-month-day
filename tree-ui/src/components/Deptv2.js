import React,{ memo,useContext } from "react";
import { OKRContext } from "./ContextProvider";
import Team from "./Team";
const DeptSectionV2 = memo(() => {
  const {
    state: { department },
    toggleDept,
  } = useContext(OKRContext);

  return (
    <div id="wrapper">
      <div
        id="content-wrapper"
        className="d-flex flex-column position-relative"
      >
        <div id="content" className="bg-blue-300">
          <div className="container position-relative special-container p-0 p-md-3">
            <div className="company-index" id="hierarchy-dashboard">
              <div className="card">
                <div className="card-body mb-4 hierarchy-body">
                  <div className="team-okrs-section">
                    <div className="dept-section nested-sortable">
                      {department.map((dept) => (
                        <div
                          className="p-0 title-hierarchy-line margin-bottom-15px dept-cluster"
                          key={dept.id}
                        >
                          <div
                            className="d-flex mb-4 title-links-company position-relative"
                            onClick={() => {
                              toggleDept(dept.id);
                            }}
                          >
                            <div className="updown-unlinked-icon d-lg-flex align-items-center d-none">
                              <img
                                alt=""
                                className="d-none cursor arrow-down arrow-down-first"
                                src="./okr2_files/arrow_drop_right_24px-dd93e705a7aa1d09f17330b617912423a298bbb482c554194491043f145ebba6.svg"
                              />
                              <img
                                alt=""
                                className="d-block cursor arrow-up arrow-up-first"
                                src="./okr2_files/arrow_drop_down_24px-8f91132ec2b189b1b833fc4c7fccd2d3b98731730b3a44ab4011480a5bcafb59.svg"
                              />
                            </div>
                            <div className="font-weight-bold font-size-18px color-gray-100 align-self-center w-100 d-flex justify-content-between align-items-center">
                              <span className="my-handle-dept d-none">
                                <img
                                  alt=""
                                  src="./okr2_files/reorder-ele-icon-0dfcdd447cff91d813b3692aeb2b4c37afb17ea477afe8c8f2a3e8a7b9595cb6.svg"
                                  width="15"
                                  height="18"
                                />
                              </span>
                              <div id="dept-2537">
                                <a
                                  className="font-size-16px color-gray-100 dept-highlight"
                                  href="https://app.sugarokr.com/en/pages/departments/2537?quarter=3&amp;year=2023"
                                >
                                  {dept.name}
                                </a>
                                <span className="font-size-16px">
                                  - Progress
                                  <span
                                    className={`dept-progress ${
                                      dept.progressStatus
                                        ? "color-red"
                                        : "color-green-100"
                                    }`}
                                  >
                                    {dept.progress}%
                                  </span>
                                  | Score
                                  <span
                                    className={`dept-score ${
                                      dept.scoreStatus
                                        ? "color-red"
                                        : "color-green-100"
                                    }`}
                                  >
                                    {dept.score} (
                                    {dept.scoreStatus ? "At Risk" : "On Track"})
                                  </span>
                                </span>
                              </div>
                              <div className="d-block d-lg-none">
                                <img
                                  alt=""
                                  className="cursor"
                                  src="./okr2_files/arrow_drop_down_24px-8f91132ec2b189b1b833fc4c7fccd2d3b98731730b3a44ab4011480a5bcafb59.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            hidden={!dept.isExpend}
                            className="content-hierarchy tree-objectives dept-cluster-content margin-bottom-26px nested-sortable-team dept-cluster-2537"
                          >
                            {dept.teams.map((team) => (
                              <Team data={team} parentData={dept} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DeptSectionV2;
