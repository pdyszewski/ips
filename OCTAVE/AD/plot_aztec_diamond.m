function plot_aztec_diamond(n)
    % Create an empty n x n matrix to represent the tiling
    % This matrix will store the type of tile at each position
    tiles = zeros(2 * n, 2 * n);

    % Generate the initial random tiling
    for i = 1:2 * n
        for j = 1:2 * n
            if mod(i + j, 2) == 0
                tiles(i, j) = randi([0, 1]); % Randomly place a tile
            end
        end
    end

    % Plot the Aztec diamond
    figure;
    hold on;
    axis equal off;

    % Plot each tile
    for i = 1:2 * n
        for j = 1:2 * n
            if mod(i + j, 2) == 0
                if tiles(i, j) == 0
                    % Horizontal domino
                    fill([j-1, j, j, j-1], [i-1, i-1, i, i], 'r');
                else
                    % Vertical domino
                    fill([j-1, j-1, j, j], [i-1, i, i, i-1], 'b');
                end
            end
        end
    end

    % Plot the Arctic Circle
    theta = linspace(0, 2 * pi, 100);
    x = n + n * cos(theta);
    y = n + n * sin(theta);
    plot(x, y, 'k', 'LineWidth', 2);

    hold off;
    title(['Aztec Diamond of order ', num2str(n)]);
end
