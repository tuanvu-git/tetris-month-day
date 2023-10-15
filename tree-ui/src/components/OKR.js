import React from 'react';

export default function OKR({ data }) {
    return (
        <div
            className="p-0 m-0 border-0 box-shadow-none nested-sortable-objective position-relative"
        >

            <ul
                className="tree-hierarchy tree-hierarchy-after my-0 tree-hierarchy-before"
            >
                <li>
                    <div className="tree-objectives p-0 m-0">
                        <div
                            className="tree row-objective p-0 m-0 border-0"
                        >
                            <ul id="bodyKeyResult" className="nested-sortable-kr p-0 m-0" >
                                <li className="parent_li">
                                    <SpanAA />
                                    <ul
                                        id="bodyKeyResult"
                                        className="nested-sortable-kr"
                                        active-sortable="true"
                                        type-sortable="key_result"
                                    >
                                        <li
                                            okrid="112329"
                                            className="parent_li"
                                        >
                                            <SpanAA />

                                            <ul
                                                id="bodyKeyResult"
                                                className="nested-sortable-kr"
                                                active-sortable="true"
                                                type-sortable="key_result"
                                            >
                                                <li okrid="119907" >
                                                    <SpanAA />
                                                    <ul>
                                                        <li>
                                                            <SpanBB />
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>

                                            <div
                                                className="js-key-result-sortable"
                                            ></div>
                                        </li>
                                        <li>
                                            <SpanBB />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

const SpanAA = () => {
    return (
        <span className="item p-0 position-relative bg-white-200">
            <span className="my-handle-kr d-none">
                <img alt=''
                    src="./okr2_files/reorder-ele-icon-0dfcdd447cff91d813b3692aeb2b4c37afb17ea477afe8c8f2a3e8a7b9595cb6.svg"
                    width="15"
                    height="18"
                />
            </span>
            <div className="nested-fields">
                <div
                    className="m-0 p-3 d-none d-lg-flex position-relative hover-box-okrs okrs-part-position"
                >
                    <div
                        className="my-auto py-0 cursor arrow-show-children min-width-24px"

                    >
                        <i className="fa mr-2"> </i>
                        <div
                            className="padding-top-1px m-auto text-center justify-content-center align-items-center d-none width-24px height-24px rounded mo-icon-color"
                            title=""
                        >
                            DM
                        </div>
                    </div>

                    <div
                        className="my-auto okr-name-width py-0 pr-0 width-full-size padding-left-20px"
                    >
                        <div className="d-flex">
                            <div
                                className="my-auto mx-0 position-relative"
                                title=""
                            >
                                <div
                                    className="padding-top-1px m-auto text-center d-flex justify-content-center align-items-center width-24px height-24px rounded mo-icon-color"
                                >
                                    DM
                                </div>

                            </div>
                            <div
                                className="mx-0 my-auto pr-1 pl-3 d-flex justify-content-between deep-size obj-deep-2"
                                data-deep="2"
                            >
                                <span
                                    className="color-black font-size-16px w-100"
                                >
                                    <a
                                        className="color-black hover-link-btn link-objective"
                                        id="link-okr-112328"
                                        href="https://app.sugarokr.com/en/pages/objectives/112328?tab=false"
                                    >20 new innovative
                                        ideas to improve
                                        quality/productivity</a>
                                </span>
                                <span
                                    className="padding-right-5px icon_mo-icon-color d-flex"
                                    data-kr-id="112328"
                                >
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="my-auto p-0 okr-owner-width"
                    >
                        <a
                            className="color-black link-objective"
                            href="https://app.sugarokr.com/en/pages/user_okrs/2?quarter=3&amp;year=2023"
                        >
                            <div
                                className="d-flex align-items-center"
                            >
                                <div
                                    className="font-size-16px text-break d-flex justify-content-center align-items-center"
                                >
                                    <span
                                        className="hover-link-btn owner-text-show"

                                    >Jonathan Le</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div
                        className="my-auto progress__bar okr-progress-width"
                    >
                        <div
                            id="input_range_112328"
                            className="input_range_112328"
                        >
                            <div
                                id="input-range"
                                className="row"
                            >
                                <div
                                    className="col-8 p-0 position-relative d-flex justify-content-center align-items-center"
                                >
                                    <input
                                        className="mx-0 d-none d-md-flex bg-image-red bg-red-opacity"
                                        type="range"
                                        min="0.0"
                                        max="100.0"
                                        percent="64.0"
                                        id="112328"
                                        data-obj-id="112328"
                                        revert="false"

                                        progress_status="at_risk"
                                        white_timeline="101"
                                        disabled=""
                                    //                                                                 style="
                                    //     background-size: 64%
                                    //       100%;
                                    //   "
                                    />

                                </div>

                                <div
                                    className="col-4 m-auto text-left pl-2 p-0 position-relative value-process-bar"
                                >
                                    <div
                                        className="font-size-16px text-left cut-text-process-bar score_value font-weight-bold color-red d-inline"
                                        data-id="112328"
                                        progress_status="at_risk"
                                    >
                                        64
                                    </div>
                                    <span
                                        className="goal-unit-m mx-auto font-size-16px font-weight-bold cut-text-process-bar truncate-css color-red"
                                        progress_status="at_risk"
                                    >
                                        %
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="my-auto p-0 okr-score-width"
                    >
                        <div
                            className="d-flex m-auto align-items-center"
                        >
                            <div
                                className="my-auto min-width-30px text-right"
                            >
                                <span
                                    className="font-size-16px score-beside-option font-weight-bold ml-2 color-red"
                                    data-id="112328"
                                    progress_status="at_risk"
                                >0.6</span>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex">
                <div
                    className="d-flex d-lg-none d-xl-none justify-content-center"
                    style={{ width: '30px' }}
                >
                    <div
                        className="padding-top-18px cursor"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="At Risk"
                    >
                        <div
                            className="status-dot m-auto bg-red"
                        ></div>
                    </div>
                </div>

                <div className="w-100">
                    <div
                        className="d-flex justify-content-between d-lg-none"
                    >
                        <div
                            className="cItem text-break color-black font-size-18px pl-0 pb-0"
                        >
                            <a
                                className="color-black hover-link-btn link-objective"
                                href="https://app.sugarokr.com/en/pages/objectives/112328"
                            >20 new innovative
                                ideas to improve
                                quality/productivity</a >
                        </div>
                    </div>

                    <div
                        className="d-flex justify-content-between d-lg-none"
                    >
                        <div
                            className="font-size-14px padding-10px mr-auto pl-0"
                        >
                            <a
                                className="color-black hover-link-btn link-objective"
                                href="https://app.sugarokr.com/en/pages/user_okrs/2?annualy_normaly_choice=1&amp;quarter=3&amp;year=2023"
                            >Jonathan Le</a
                            >
                        </div>
                        <div
                            className="font-size-14px text-right padding-10px font-weight-bold color-red"
                        >
                            64 % | 0.6
                        </div>
                    </div>
                </div>
            </div>
        </span>
    )
}

const SpanBB = () => {
    return (
        <span
            className="item p-0 position-relative"
        >
            <span
                className="my-handle-kr d-none"
            >
                <img alt=''
                    src="./okr2_files/reorder-ele-icon-0dfcdd447cff91d813b3692aeb2b4c37afb17ea477afe8c8f2a3e8a7b9595cb6.svg"
                    width="15"
                    height="18"
                />
            </span>
            <div
                className="nested-fields"
                data-index="okr-119907"
                data-weightage="equal_as_other_krs"
            >
                <div
                    className="m-0 p-3 d-none d-lg-flex position-relative hover-box-okrs okrs-part-position"
                    data-id="okr-119907"
                >
                    <div
                        className="my-auto py-0 cursor arrow-show-children min-width-24px"
                        okrid="119907"
                    >
                        <div
                            className="padding-top-1px m-auto text-center justify-content-center align-items-center d-flex width-24px height-24px rounded kr-icon-color"
                            title=""
                            data-toggle="tooltip"
                            data-html="true"
                            data-original-title="Team Key Result"
                        >
                            KR
                        </div>
                    </div>

                    <div
                        className="my-auto okr-name-width p-0 pl-3 width-full-size"
                    >
                        <div
                            className="d-flex"
                        >
                            <div
                                className="my-auto mx-0 position-relative d-none"
                                title=""
                                data-toggle="tooltip"
                                data-html="true"
                                data-original-title="Team Key Result"
                            >
                                <div
                                    className="padding-top-1px m-auto text-center d-flex justify-content-center align-items-center width-24px height-24px rounded kr-icon-color"
                                >
                                    KR
                                </div>
                            </div>
                            <div
                                className="mx-0 my-auto pr-1 false d-flex justify-content-between deep-size kr-deep-4"
                                data-deep="4"
                            >
                                <span
                                    className="color-black font-size-16px w-100"
                                >
                                    <a
                                        className="color-black hover-link-btn link-objective"
                                        id="link-okr-119907"
                                        href="https://app.sugarokr.com/en/pages/objectives/119907?tab=false"
                                    >Innovative
                                        2: TBD</a
                                    >
                                </span>
                                <span
                                    className="padding-right-5px icon_mo-icon-color d-flex"
                                    data-kr-id="119907"
                                >
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="my-auto p-0 okr-owner-width"
                    >
                        <a
                            className="color-black link-objective"
                            href="https://app.sugarokr.com/en/pages/user_okrs/12113?quarter=3&amp;year=2023"
                        >
                            <div
                                className="d-flex align-items-center"
                            >
                                <div
                                    className="font-size-16px text-break d-flex justify-content-center align-items-center"
                                >
                                    <span
                                        className="hover-link-btn owner-text-show"
                                    >George
                                        Nguyen</span
                                    >
                                </div>
                            </div>
                        </a>
                    </div>

                    <div
                        className="my-auto progress__bar okr-progress-width"
                    >
                        <div
                            id="input_range_119907"
                            className="input_range_119907"
                        >
                            <div
                                id="input-range"
                                className="row"
                            >
                                <div
                                    className="col-8 p-0 position-relative d-flex justify-content-center align-items-center"
                                >
                                    <input
                                        className="mx-0 d-none d-md-flex gray bg-image-gray-400 bg-gray-400-opacity"
                                        type="range"
                                        min="0.0"
                                        max="100.0"

                                        percent="0.0"
                                        id="119907"
                                        data-obj-id="119907"
                                        revert="false"
                                        progress_status="do_not_start_yet"
                                        white_timeline="101"
                                        disabled=""
                                    //                                                                         style="
                                    //     background-size: 0%
                                    //       100%;
                                    //   "
                                    />

                                </div>

                                <div
                                    className="col-4 m-auto text-left pl-2 p-0 position-relative value-process-bar"
                                >
                                    <div
                                        className="font-size-16px text-left cut-text-process-bar score_value font-weight-bold color-gray-400 d-inline"
                                        data-id="119907"
                                        progress_status="do_not_start_yet"
                                    >
                                        0
                                    </div>
                                    <span
                                        className="goal-unit-m mx-auto font-size-16px font-weight-bold cut-text-process-bar truncate-css color-gray-400"
                                        progress_status="do_not_start_yet"
                                    >
                                        %
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="my-auto p-0 okr-score-width"
                    >
                        <div
                            className="d-flex m-auto align-items-center"
                        >
                            <div
                                className="my-auto min-width-30px text-right"
                            >
                                <span
                                    className="font-size-16px score-beside-option font-weight-bold ml-2 color-gray-400"
                                    data-id="119907"
                                    progress_status="do_not_start_yet"
                                >0.0</span
                                >
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex">
                <div
                    className="d-flex d-lg-none d-xl-none justify-content-center"
                    style={{ width: '30px' }}
                >
                    <div
                        className="padding-top-18px cursor"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="Not Started"
                    >
                        <div
                            className="status-dot m-auto bg-gray-400"
                        ></div>
                    </div>
                </div>

                <div className="w-100">
                    <div
                        className="d-flex justify-content-between d-lg-none"
                    >
                        <div
                            className="cItem text-break color-black font-size-18px pl-0 pb-0"
                        >
                            <a
                                className="color-black hover-link-btn link-objective"
                                href="https://app.sugarokr.com/en/pages/objectives/119907"
                            >Innovative 2:
                                TBD</a
                            >
                        </div>
                    </div>

                    <div
                        className="d-flex justify-content-between d-lg-none"
                    >
                        <div
                            className="font-size-14px padding-10px mr-auto pl-0"
                        >
                            <a
                                className="color-black hover-link-btn link-objective"
                                href="https://app.sugarokr.com/en/pages/user_okrs/12113?annualy_normaly_choice=1&amp;quarter=3&amp;year=2023"
                            >GN</a
                            >
                        </div>
                        <div
                            className="font-size-14px text-right padding-10px font-weight-bold color-gray-400"
                        >
                            0 % | 0.0
                        </div>
                    </div>
                </div>
            </div>
        </span>
    )
}