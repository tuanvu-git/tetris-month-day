import { createContext,useCallback,useMemo,useReducer } from "react";
import department,{ updateOKR } from "./fake_response";

export const OKRContext = createContext({
  /**
   * 1 dept have more teams
   * 1 team have more objectives
   * 1 objective have more objectives or keyresult
   */
  // department: department,
  // setUserName: () => { },
  state: { department },
  setState: () => {},
});

const actions = {
  TOGGLE_DEPT: "TOGGLE_DEPT",
  TOGGLE_OBJ: "TOGGLE_OBJ",
  TOGGLE_TEAM: "TOGGLE_TEAM",
  UPDATE_OKR: "UPDATE_OKR",
};

const reducer = (state, action) => {
  let department = state.department;
  switch (action.type) {
    case actions.TOGGLE_DEPT:
      const id = action.payload;
      department = department.map((d) => {
        if (d.id === id) {
          d.isExpend = !d.isExpend;
        }
        return d;
      });
      return {
        ...state,
        department: department,
        // department: state.department.map((d, i) =>
        //   i === 1 ? { ...d, name: "hahaa" } : d
        // ),
      };
    //   return { ...state };
    case actions.TOGGLE_TEAM:
      const teamId = action.payload.teamId;
      const departmentId = action.payload.departmentId;
      const deptIndex = department.findIndex((d) => d.id === departmentId);
      if (deptIndex === -1) {
        // index not found
        return department;
      }
      department[deptIndex].teams = department[deptIndex].teams.map((t) => {
        if (t.id === teamId) {
          t.isExpend = !t.isExpend;
        }
        return { ...t };
      });
      department[deptIndex] = { ...department[deptIndex] };

      return {
        ...state,
        department: department,
      };
    case actions.UPDATE_OKR:
      const payload = action.payload;
      console.log("UPDATE_OKR", payload);
      const data = updateOKR;
      const index = department.findIndex((d) => d.id === data.department.id);
      if (index === -1) return;
      department[index] = {
        ...department[index],
        ...data.department,
      };

      const indexTeam = department[index].teams.findIndex(
        (t) => t.id === data.team.id
      );
      if (indexTeam === -1) return;
      department[index].teams[indexTeam] = {
        ...department[index].teams[indexTeam],
        ...data.team,
        children: data.children,
      };

      return {
        ...state,
      };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { department });

  const updateDeptbyId = useCallback(() => {
    // update array
  }, []);

  const toggleDept = (id) => {
    dispatch({ type: actions.TOGGLE_DEPT, payload: id });
  };

  const toggleTeam = useCallback((departmentId, teamId) => {
    dispatch({ type: actions.TOGGLE_TEAM, payload: { departmentId, teamId } });
  }, []);

  const toggleObj = useCallback(() => {}, []);

  const updateKR = useCallback((id, parentId, teamId, departmentId) => {
    dispatch({
      type: actions.UPDATE_OKR,
      payload: { id, parentId, teamId, departmentId },
    });
  }, []);

  const value = useMemo(
    () => ({ state, toggleDept, toggleTeam, toggleObj, updateKR }),
    [state]
  );

  return <OKRContext.Provider value={value}>{children}</OKRContext.Provider>;
};

export default Provider;
