function ising_model(L, T, steps)
  % L: size of the grid (LxL)
  % T: temperature
  % steps: number of Monte Carlo steps

  % Initialize the grid with random spins (-1 or 1)
  grid = 2 * randi([0, 1], L, L) - 1;

  % Precompute the exponential values for efficiency
  exp_dE = exp(-2 * (2:2:8) / T);

  for step = 1:steps
    % Randomly select a site (i, j)
    i = randi(L);
    j = randi(L);

    % Calculate the change in energy if the spin is flipped
    % Using periodic boundary conditions (mod)
    dE = 2 * grid(i, j) * (grid(mod(i-2, L) + 1, j) + ...
                           grid(mod(i, L) + 1, j) + ...
                           grid(i, mod(j-2, L) + 1) + ...
                           grid(i, mod(j, L) + 1));

    % Metropolis criterion
    if dE <= 0 || rand() < exp_dE(dE/2)
      grid(i, j) = -grid(i, j);
    end

    % Visualization
    if mod(step, 100) == 0
      imagesc(grid);
      colormap([1 1 1; 0 0 0]); % Black and white colormap
      title(['Step: ', num2str(step)]);
      drawnow;
    end
  end

  % Final visualization
  imagesc(grid);
  colormap([1 1 1; 0 0 0]);
  title(['Final configuration at T = ', num2str(T)]);
  drawnow;
end

