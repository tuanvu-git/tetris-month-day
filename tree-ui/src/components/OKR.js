import React,{ useContext,useMemo } from "react";
import { OKRContext } from "./ContextProvider";

const OKR = ({ data: okrs }) => {
  return useMemo(() => {
    console.log("OKR memo");
    return (
      <div className="p-0 m-0 border-0 box-shadow-none nested-sortable-objective position-relative">
        {okrs.map((rootObj) => (
          <ul className="tree-hierarchy tree-hierarchy-after my-0 tree-hierarchy-before">
            <li>
              <div className="tree-objectives p-0 m-0">
                <div className="tree row-objective p-0 m-0 border-0">
                  {<Recursive okr={rootObj}></Recursive>}
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }, [okrs]);
};

const Recursive = ({ okr }) => {
  if (!okr) {
    return <></>;
  }
  return (
    <>
      <ul className={`${okr.lv === 0 ? "p-0 m-0" : ""}`}>
        <li className="parent_li">
          {okr.type === 1 && <BlockObjective data={okr} />}
          {okr.type === 0 && <BlockKeyResult data={okr} />}
          {okr.children && okr.children.map((o) => <Recursive okr={o} />)}
        </li>
      </ul>
    </>
  );
};

const BlockObjective = ({ data: obj }) => {
  return useMemo(() => {
    console.log("BlockObjective memo");

    return (
      <span className="item p-0 position-relative bg-white-200">
        <span className="my-handle-kr d-none">
          <img
            alt=""
            src="./okr2_files/reorder-ele-icon-0dfcdd447cff91d813b3692aeb2b4c37afb17ea477afe8c8f2a3e8a7b9595cb6.svg"
            width="15"
            height="18"
          />
        </span>
        <div className="nested-fields">
          <div className="m-0 p-3 d-none d-lg-flex position-relative hover-box-okrs okrs-part-position">
            <div className="my-auto okr-name-width py-0 pr-0 width-full-size padding-left-20px">
              <div className="d-flex">
                <div className="my-auto mx-0 position-relative" title="">
                  <div className="padding-top-1px m-auto text-center d-flex justify-content-center align-items-center width-24px height-24px rounded mo-icon-color">
                    {obj.shortName}
                  </div>
                </div>
                <div className="mx-0 my-auto pr-1 pl-3 d-flex justify-content-between deep-size obj-deep-2">
                  <span className="color-black font-size-16px w-100">
                    <a
                      className="color-black hover-link-btn link-objective"
                      href="https://app.sugarokr.com/en/pages/objectives/112328?tab=false"
                    >
                      {obj.name}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="my-auto p-0 okr-owner-width">
              <a
                className="color-black link-objective"
                href="https://app.sugarokr.com/en/pages/user_okrs/2?quarter=3&amp;year=2023"
              >
                <div className="d-flex align-items-center">
                  <div className="font-size-16px text-break d-flex justify-content-center align-items-center">
                    <span className="hover-link-btn owner-text-show">
                      {obj.owner}
                    </span>
                  </div>
                </div>
              </a>
            </div>

            <div className="my-auto progress__bar okr-progress-width">
              <div id="input_range_112328" className="input_range_112328">
                <div id="input-range" className="row">
                  <div className="col-8 p-0 position-relative d-flex justify-content-center align-items-center">
                    <input
                      className="mx-0 d-none d-md-flex bg-image-red bg-red-opacity"
                      type="range"
                      min="0.0"
                      max="100.0"
                      value={obj.progress}
                      disabled
                      style={{
                        backgroundSize: `${obj.progress}% 100%`,
                      }}
                    />
                  </div>

                  <div className="col-4 m-auto text-left pl-2 p-0 position-relative value-process-bar">
                    <div className="font-size-16px text-left cut-text-process-bar score_value font-weight-bold color-red d-inline">
                      {obj.progress}
                    </div>
                    <span className="goal-unit-m mx-auto font-size-16px font-weight-bold cut-text-process-bar truncate-css color-red">
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-auto p-0 okr-score-width">
              <div className="d-flex m-auto align-items-center">
                <div className="my-auto min-width-30px text-right">
                  <span className="font-size-16px score-beside-option font-weight-bold ml-2 color-red">
                    {obj.score}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }, [obj]);
};

const BlockKeyResult = ({ data: kr }) => {
  const { updateKR } = useContext(OKRContext);
  return useMemo(() => {
    console.log("BlockKeyResult memo");
    return (
      <span className="item p-0 position-relative">
        <span className="my-handle-kr d-none">
          <img
            alt=""
            src="./okr2_files/reorder-ele-icon-0dfcdd447cff91d813b3692aeb2b4c37afb17ea477afe8c8f2a3e8a7b9595cb6.svg"
            width="15"
            height="18"
          />
        </span>
        <div className="nested-fields">
          <div className="m-0 p-3 d-none d-lg-flex position-relative hover-box-okrs okrs-part-position">
            <div className="my-auto py-0 cursor arrow-show-children min-width-24px">
              <div className="padding-top-1px m-auto text-center justify-content-center align-items-center d-flex width-24px height-24px rounded kr-icon-color">
                KR
              </div>
            </div>

            <div className="my-auto okr-name-width p-0 pl-3 width-full-size">
              <div className="d-flex">
                <div className="mx-0 my-auto pr-1 false d-flex justify-content-between deep-size kr-deep-4">
                  <span className="color-black font-size-16px w-100">
                    <a
                      className="color-black hover-link-btn link-objective"
                      href="https://app.sugarokr.com/en/pages/objectives/119907?tab=false"
                    >
                      {kr.name}
                    </a>
                  </span>
                  <span className="padding-right-5px icon_mo-icon-color d-flex"></span>
                </div>
              </div>
            </div>

            <div className="my-auto p-0 okr-owner-width">
              <a
                className="color-black link-objective"
                href="https://app.sugarokr.com/en/pages/user_okrs/12113?quarter=3&amp;year=2023"
              >
                <div className="d-flex align-items-center">
                  <div className="font-size-16px text-break d-flex justify-content-center align-items-center">
                    <span className="hover-link-btn owner-text-show">
                      {kr.owner}
                    </span>
                  </div>
                </div>
              </a>
            </div>

            <div className="my-auto progress__bar okr-progress-width">
              <div id="input_range_112328" className="input_range_112328">
                <div id="input-range" className="row">
                  <div className="col-8 p-0 position-relative d-flex justify-content-center align-items-center">
                    <input
                      onClick={() => {
                        updateKR(
                          kr.id,
                          kr.parentId,
                          kr.teamId,
                          kr.departmentId
                        );
                      }}
                      className="mx-0 d-none d-md-flex bg-image-red bg-red-opacity"
                      type="range"
                      min="0.0"
                      max="100.0"
                      value={kr.progress}
                      style={{
                        backgroundSize: `${kr.progress}% 100%`,
                      }}
                    />
                  </div>

                  <div className="col-4 m-auto text-left pl-2 p-0 position-relative value-process-bar">
                    <div className="font-size-16px text-left cut-text-process-bar score_value font-weight-bold color-red d-inline">
                      {kr.progress}
                    </div>
                    <span className="goal-unit-m mx-auto font-size-16px font-weight-bold cut-text-process-bar truncate-css color-red">
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-auto p-0 okr-score-width">
              <div className="d-flex m-auto align-items-center">
                <div className="my-auto min-width-30px text-right">
                  <span className="font-size-16px score-beside-option font-weight-bold ml-2 color-red">
                    {kr.score}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }, [kr, updateKR]);
};

export default OKR;
