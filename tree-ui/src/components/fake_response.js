
const department = [
    {
        id: 1,
        progress: 63, // %
        name: 'Delivery',
        progressStatus: 1, // 0 = success 1 = fail ...
        score: 0.9,
        isExend: 1, // only FE data, flag to update UI expend/collapse
        scoreStatus: 1, // 0 = success 1 = fail ...
        teams: [
            {
                id: 10,
                departmentId: 1,
                name: 'Delivery Manager',
                progress: 86,
                score: 0.9,
                progressStatus: 0, // 0 = success 1 = fail ...
                scoreStatus: 0, // 0 = success 1 = fail ...
                children: [
                    {
                        id: 100,
                        departmentId: 1,
                        teamId: 10,
                        type: 1, // 1 = objective 0 = keyresult
                        parentId: [],
                        name: 'Improve Quality & Productivity',
                        owner: 'George Nguyen',
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
                                name: '20 new innovative ideas to improve quality/productivity',
                                owner: 'Jonathan Le',
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
                                        type: 0, // 1 = objective 0 = keyresult
                                        parentId: [100, 1000],
                                        name: 'Built a strong automation testers team with at least 1 contract won',
                                        owner: 'George Nguyen',
                                        progress: 100,
                                        score: 1.0,
                                        progressStatus: 0,
                                        scoreStatus: 0,
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 101,
                        departmentId: 1,
                        teamId: 10,
                        type: 0, // 1 = objective 0 = keyresult
                        parentId: [],
                        name: 'Adopt load test as a mandatory process for all new projects during/before UAT',
                        owner: 'Tuan Vu',
                        progress: 100,
                        score: 0.99,
                        progressStatus: 0,
                        scoreStatus: 0,
                    }
                ]
            }

        ]
    }
]
export default department