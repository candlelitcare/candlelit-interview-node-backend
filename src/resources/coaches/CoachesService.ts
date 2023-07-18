/**
 * A service for managing coaches.
 */
class CoachesService {
  private coaches: Coach[] = [];

  /**
   * Creates an instance of CoachesService.
   */
  constructor() {
    this.coaches = [
      {
        id: '1',
        name: 'John Doe',
        role: 'Coach',
        location: 'London',
        bio: 'I am a coach',
        email: 'fake@email.com',
        qualifications: ['BSc', 'MSc', 'PhD'],
        password: 'password',
      },
    ];
  }

  /**
   * Retrieves a coach by their ID.
   *
   * @param {string} id - The ID of the coach.
   * @returns {Promise<Coach|undefined>} The coach with the specified ID, or undefined if not found.
   */
  async getCoachById(_id: string): Promise<Coach | undefined> {
    // TODO: Implement this

    return {} as Coach;
  }

  /**
   * Retrieves all coaches.
   *
   * @returns {Promise<Coach[]>} An array of all coaches.
   */
  async getAllCoaches(): Promise<Coach[]> {
    return this.coaches;
  }

  /**
   * Creates a new coach.
   *
   * @param {Coach} _coach - The coach to be created.
   * @returns {Promise<Coach>} The newly created coach.
   */
  async createCoach(_coach: Coach): Promise<Coach> {
    // TODO: Create a coach
    return {} as Coach;
  }
}

export default CoachesService;
