const department = [
  {
    id: 1,
    progress: 63, // %
    name: "Delivery",
    progressStatus: 1, // 0 = success 1 = fail ...
    score: 0.9,
    isExpend: true, // only FE data, flag to update UI expend/collapse
    scoreStatus: 1, // 0 = success 1 = fail ...
    teams: [
      {
        id: 10,
        departmentId: 1,
        name: "Delivery Manager 1",
        progress: 86,
        isExpend: true, // only FE data, flag to update UI expend/collapse
        score: 0.9,
        progressStatus: 0, // 0 = success 1 = fail ...
        scoreStatus: 0, // 0 = success 1 = fail ...
        children: [
          {
            id: 100,
            departmentId: 1,
            teamId: 10,
            lv: 0,
            type: 1, // 1 = objective 0 = keyresult
            parentId: [],
            name: "Improve Quality & Productivity",
            shortName: "IQP",
            owner: "George Nguyen",
            progress: 71,
            score: 0.7,
            progressStatus: 0,
            scoreStatus: 0,
            children: [
              {
                id: 1000,
                departmentId: 1,
                teamId: 10,
                parentId: [100],
                shortName: "2QP",
                name: "20 new innovative ideas to improve quality/productivity",
                owner: "Jonathan Le",
                progress: 50,
                score: 0.5,
                progressStatus: 1,
                scoreStatus: 1,
                type: 1, // 1 = objective 0 = keyresult
                children: [
                  {
                    id: 10000,
                    departmentId: 1,
                    teamId: 10,
                    type: 1, // 1 = objective 0 = keyresult
                    parentId: [100, 1000],
                    shortName: "BAS",
                    name: "Built a strong automation testers team with at least 1 contract won",
                    owner: "George Nguyen",
                    progress: 100,
                    score: 1.0,
                    progressStatus: 0,
                    scoreStatus: 0,
                    children: [
                      {
                        id: 100000,
                        departmentId: 1,
                        teamId: 10,
                        type: 0, // 1 = objective 0 = keyresult
                        parentId: [100, 1000],
                        name: "Haha",
                        owner: "George Nguyen",
                        progress: 50,
                        score: 0.5,
                        progressStatus: 0,
                        scoreStatus: 0,
                      },
                      {
                        id: 100001,
                        departmentId: 1,
                        teamId: 10,
                        type: 0, // 1 = objective 0 = keyresult
                        parentId: [100, 1000, 10000],
                        name: "huhu",
                        owner: "George Nguyen",
                        progress: 40,
                        score: 0.4,
                        progressStatus: 0,
                        scoreStatus: 0,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 101,
            departmentId: 1,
            teamId: 10,
            type: 1, // 1 = objective 0 = keyresult
            parentId: [],
            lv: 0,
            shortName: "ABU",
            name: "Adopt load test as a mandatory process for all new projects during/before UAT",
            owner: "Tuan Vu",
            progress: 100,
            score: 0.99,
            progressStatus: 0,
            scoreStatus: 0,
            children: [
              {
                id: 2001,
                departmentId: 1,
                teamId: 10,
                type: 0, // 1 = objective 0 = keyresult
                parentId: [101],
                name: "Haha",
                owner: "George Nguyen",
                progress: 50,
                score: 0.5,
                progressStatus: 0,
                scoreStatus: 0,
              },
              {
                id: 2002,
                departmentId: 1,
                teamId: 10,
                type: 0, // 1 = objective 0 = keyresult
                parentId: [101],
                name: "Haha",
                owner: "George Nguyen",
                progress: 50,
                score: 0.5,
                progressStatus: 0,
                scoreStatus: 0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    progress: 63, // %
    name: "Delivery 2",
    progressStatus: 1, // 0 = success 1 = fail ...
    score: 0.9,
    isExpend: true, // only FE dat
    scoreStatus: 1, // 0 = success 1 = fail ...
    teams: [
      {
        id: 20,
        name: "Delivery Manager 1",
        progress: 86,
        score: 0.9,
        departmentId: 2,
        isExpend: true, // only FE dat
        progressStatus: 0, // 0 = success 1 = fail ...
        scoreStatus: 0, // 0 = success 1 = fail ...
        children: [
          {
            id: 100,
            departmentId: 1,
            teamId: 10,
            lv: 0,
            type: 1, // 1 = objective 0 = keyresult
            parentId: [],
            name: "Improve Quality & Productivity",
            shortName: "IQP",
            owner: "George Nguyen",
            progress: 71,
            score: 0.7,
            progressStatus: 0,
            scoreStatus: 0,
            children: [
              {
                id: 1000,
                departmentId: 1,
                teamId: 10,
                parentId: [100],
                shortName: "2QP",
                name: "20 new innovative ideas to improve quality/productivity",
                owner: "Jonathan Le",
                progress: 50,
                score: 0.5,
                progressStatus: 1,
                scoreStatus: 1,
                type: 1, // 1 = objective 0 = keyresult
                children: [
                  {
                    id: 10000,
                    departmentId: 1,
                    teamId: 10,
                    type: 1, // 1 = objective 0 = keyresult
                    parentId: [100, 1000],
                    shortName: "BAS",
                    name: "Built a strong automation testers team with at least 1 contract won",
                    owner: "George Nguyen",
                    progress: 100,
                    score: 1.0,
                    progressStatus: 0,
                    scoreStatus: 0,
                    children: [
                      {
                        id: 100000,
                        departmentId: 1,
                        teamId: 10,
                        type: 0, // 1 = objective 0 = keyresult
                        parentId: [100, 1000],
                        name: "Haha",
                        owner: "George Nguyen",
                        progress: 50,
                        score: 0.5,
                        progressStatus: 0,
                        scoreStatus: 0,
                      },
                      {
                        id: 100001,
                        departmentId: 1,
                        teamId: 10,
                        type: 0, // 1 = objective 0 = keyresult
                        parentId: [100, 1000, 10000],
                        name: "huhu",
                        owner: "George Nguyen",
                        progress: 40,
                        score: 0.4,
                        progressStatus: 0,
                        scoreStatus: 0,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 101,
            departmentId: 1,
            teamId: 10,
            type: 1, // 1 = objective 0 = keyresult
            parentId: [],
            lv: 0,
            shortName: "ABU",
            name: "Adopt load test as a mandatory process for all new projects during/before UAT",
            owner: "Tuan Vu",
            progress: 100,
            score: 0.99,
            progressStatus: 0,
            scoreStatus: 0,
            children: [
              {
                id: 2001,
                departmentId: 1,
                teamId: 10,
                type: 0, // 1 = objective 0 = keyresult
                parentId: [101],
                name: "Haha",
                owner: "George Nguyen",
                progress: 50,
                score: 0.5,
                progressStatus: 0,
                scoreStatus: 0,
              },
              {
                id: 2002,
                departmentId: 1,
                teamId: 10,
                type: 0, // 1 = objective 0 = keyresult
                parentId: [101],
                name: "Haha",
                owner: "George Nguyen",
                progress: 50,
                score: 0.5,
                progressStatus: 0,
                scoreStatus: 0,
              },
            ],
          },
        ],
      },
      {
        id: 21,
        name: "Cuoc song 2",
        progress: 86,
        score: 0.9,
        departmentId: 2,
        isExpend: true, // only FE dat
        progressStatus: 0, // 0 = success 1 = fail ...
        scoreStatus: 0, // 0 = success 1 = fail ...
        children: [
          {
            id: 100,
            departmentId: 1,
            teamId: 10,
            lv: 0,
            type: 1, // 1 = objective 0 = keyresult
            parentId: [],
            name: "Improve Quality & Productivity",
            shortName: "IQP",
            owner: "George Nguyen",
            progress: 71,
            score: 0.7,
            progressStatus: 0,
            scoreStatus: 0,
            children: [
              {
                id: 1000,
                departmentId: 1,
                teamId: 10,
                parentId: [100],
                shortName: "2QP",
                name: "20 new innovative ideas to improve quality/productivity",
                owner: "Jonathan Le",
                progress: 50,
                score: 0.5,
                progressStatus: 1,
                scoreStatus: 1,
                type: 1, // 1 = objective 0 = keyresult
                children: [
                  {
                    id: 10000,
                    departmentId: 1,
                    teamId: 10,
                    type: 1, // 1 = objective 0 = keyresult
                    parentId: [100, 1000],
                    shortName: "BAS",
                    name: "Built a strong automation testers team with at least 1 contract won",
                    owner: "George Nguyen",
                    progress: 100,
                    score: 1.0,
                    progressStatus: 0,
                    scoreStatus: 0,
                    children: [
                      {
                        id: 100000,
                        departmentId: 1,
                        teamId: 10,
                        type: 0, // 1 = objective 0 = keyresult
                        parentId: [100, 1000],
                        name: "Haha",
                        owner: "George Nguyen",
                        progress: 50,
                        score: 0.5,
                        progressStatus: 0,
                        scoreStatus: 0,
                      },
                      {
                        id: 100001,
                        departmentId: 1,
                        teamId: 10,
                        type: 0, // 1 = objective 0 = keyresult
                        parentId: [100, 1000, 10000],
                        name: "huhu",
                        owner: "George Nguyen",
                        progress: 40,
                        score: 0.4,
                        progressStatus: 0,
                        scoreStatus: 0,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 101,
            departmentId: 1,
            teamId: 10,
            type: 1, // 1 = objective 0 = keyresult
            parentId: [],
            lv: 0,
            shortName: "ABU",
            name: "Adopt load test as a mandatory process for all new projects during/before UAT",
            owner: "Tuan Vu",
            progress: 100,
            score: 0.99,
            progressStatus: 0,
            scoreStatus: 0,
            children: [
              {
                id: 2001,
                departmentId: 1,
                teamId: 10,
                type: 0, // 1 = objective 0 = keyresult
                parentId: [101],
                name: "Haha",
                owner: "George Nguyen",
                progress: 50,
                score: 0.5,
                progressStatus: 0,
                scoreStatus: 0,
              },
              {
                id: 2002,
                departmentId: 1,
                teamId: 10,
                type: 0, // 1 = objective 0 = keyresult
                parentId: [101],
                name: "Haha",
                owner: "George Nguyen",
                progress: 50,
                score: 0.5,
                progressStatus: 0,
                scoreStatus: 0,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const updateOKR = {
  department: {
    id: 1,
    name: "hello",
    progress: 90,
  },
  team: {
    id: 10,
    department: 1,
    name: "kitty",
    progress: 100,
  },
  children: [
    {
      id: 10000,
      departmentId: 1,
      teamId: 10,
      lv:0,
      type: 1, // 1 = objective 0 = keyresult
      parentId: [100, 1000],
      shortName: "BAS",
      name: "Built a strong automation testers team with at least 1 contract won",
      owner: "George Nguyen 2",
      progress: 100,
      score: 1.0,
      progressStatus: 0,
      scoreStatus: 0,
      children: [
        {
          id: 100000,
          departmentId: 1,
          teamId: 10,
          type: 0, // 1 = objective 0 = keyresult
          parentId: [100, 1000],
          name: "Haha",
          owner: "George Nguyen",
          progress: 50,
          score: 0.5,
          progressStatus: 0,
          scoreStatus: 0,
        },
        {
          id: 100001,
          departmentId: 1,
          teamId: 10,
          type: 0, // 1 = objective 0 = keyresult
          parentId: [100, 1000, 10000],
          name: "huhu",
          owner: "George Nguyen",
          progress: 40,
          score: 0.4,
          progressStatus: 0,
          scoreStatus: 0,
        },
      ],
    },
  ],
};
export default department;
