jest.mock("node-fetch");

const fetch = require("node-fetch");

fetch.mockReturnValue(
	Promise.resolve({
		json: Promise.resolve({
			event: "recording.completed",
			payload: {
				account_id: "lAAAAAAAAAAAAA",
				object: {
					uuid: "dj12vck6sdTn6yy7qdy3dQg==",
					id: 150000008,
					host_id: "uLobbbbbbbbbb_qQsQ",
					topic: "A test meeting",
					type: 2,
					start_time: "2019-07-11T20:00:00Z",
					duration: 1,
					timezone: "America/Los_Angeles",
					total_size: 529758,
					recording_count: 4,
					share_url: "https://zoom.us/recording/share/aaaaaannnnnldglrkgmrmhh",
					recording_files: [
						{
							id: "8f88599d-19ca-4d2b-a965-1196e777cb3c",
							meeting_id: "bpKUheqtRLifLBcIYVJLZw==",
							recording_start: "2019-07-23T22:14:57Z",
							recording_end: "2019-07-23T22:15:41Z",
							file_type: "MP4",
							file_size: 282825,
							play_url:
								"https://zoom.us/recording/play/80ebRwsfjskf2H3vlSigX0gNlBBBBBBBBBBBBBB",
							download_url:
								"https://zoom.us/recording/download/80ebRwsfjskf2H3vlSigX0gNlBBBBBBBBBBBBBB",
							status: "completed",
							recording_type: "shared_screen_with_speaker_view"
						},
						{
							id: "a6b332f9-2246-49e5-913e-588adc7f0f5f",
							meeting_id: "bpKUheqtRLifLBcIYVJLZw==",
							recording_start: "2019-07-23T22:14:57Z",
							recording_end: "2019-07-23T22:15:41Z",
							file_type: "M4A",
							file_size: 246560,
							play_url:
								"https://zoom.us/recording/play/Oaevut8LSACCCCCCCCnnnnnnnnbbbb",
							download_url:
								"https://zoom.us/recording/download/Oaevut8LSACCCCCCCCnnnnnnnnbbbb",
							status: "completed",
							recording_type: "audio_only"
						},
						{
							meeting_id: "bpKUheqtRLifLBcIYVJLZw==",
							recording_start: "2019-07-23T22:14:57Z",
							recording_end: "2019-07-23T22:15:41Z",
							file_type: "TIMELINE",
							download_url:
								"https://zoom.us/recording/download/2dBBBBBccccDDDDeeee"
						},
						{
							id: "97a4f7ca-e7e8-4e3b-b28a-27b42cd33c09",
							meeting_id: "bpKUheqtRLifLBcIYVJLZw==",
							recording_start: "2019-07-23T22:14:57Z",
							recording_end: "2019-07-23T22:15:41Z",
							file_type: "TRANSCRIPT",
							file_size: 373,
							play_url:
								"https://zoom.us/recording/play/7h0BBBBBBBchfhfhffh_0AAAAbbbbbeeSFcf209m",
							download_url:
								"https://zoom.us/recording/play/7h0BBBBBBBchfhfhffh_0AAAAbbbbbeeSFcf209m",
							status: "completed",
							recording_type: "audio_transcript"
						}
					]
				}
			}
		})
	})
);
